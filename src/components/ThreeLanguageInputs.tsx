import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import type { UseFormRegister, UseFormWatch, UseFormGetValues, FieldErrors } from "react-hook-form";

interface ThreeLanguageData {
  en: string;
  ka: string;
  ru: string;
}

interface ThreeLanguageInputsProps {
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  getValues: UseFormGetValues<any>;
  errors?: FieldErrors<any>;
  onSubmit: () => void;
  isSubmitting?: boolean;
  submitButtonText?: string;
  submittingText?: string;
  labels?: {
    en: string;
    ka: string;
    ru: string;
  };
  placeholders?: {
    en: string;
    ka: string;
    ru: string;
  };
  className?: string;
  showProgressIndicator?: boolean;
  fieldNames?: {
    en: string;
    ka: string;
    ru: string;
  };
}

export function ThreeLanguageInputs({
  register,
  watch,
  getValues,
  errors,
  onSubmit,
  isSubmitting = false,
  submitButtonText = "Submit",
  submittingText = "Submitting...",
  labels = {
    en: "English Name",
    ka: "Georgian Name", 
    ru: "Russian Name"
  },
  placeholders = {
    en: "Enter name in English",
    ka: "Enter name in Georgian",
    ru: "Enter name in Russian"
  },
  className = "",
  showProgressIndicator = true,
  fieldNames = {
    en: "en",
    ka: "ka", 
    ru: "ru"
  }
}: ThreeLanguageInputsProps) {
  const [currentStep, setCurrentStep] = useState<'en' | 'ka' | 'ru' | 'complete'>('en');
  const watchedValues = watch();

  const handleNext = () => {
    const values = getValues();
    
    if (currentStep === 'en' && values[fieldNames.en]?.trim()) {
      setCurrentStep('ka');
    } else if (currentStep === 'ka' && values[fieldNames.ka]?.trim()) {
      setCurrentStep('ru');
    } else if (currentStep === 'ru' && values[fieldNames.ru]?.trim()) {
      setCurrentStep('complete');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (currentStep !== 'complete') {
        handleNext();
      } else {
        onSubmit();
      }
    }
  };

  const canProceed = () => {
    const values = getValues();
    switch (currentStep) {
      case 'en': return values[fieldNames.en]?.trim();
      case 'ka': return values[fieldNames.ka]?.trim();
      case 'ru': return values[fieldNames.ru]?.trim();
      default: return false;
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* English Input - Always visible */}
      <div>
        <label className="block text-sm font-medium mb-2 cursor-pointer" onClick={() => setCurrentStep('en')}>
          {labels.en} {currentStep === 'en' && <span className='text-blue-500'>(current)</span>}
          {watchedValues[fieldNames.en] && currentStep !== 'en' && <span className='text-green-500 ml-2'>✓</span>}
        </label>
        <Input 
          type="text" 
          placeholder={placeholders.en}
          {...register(fieldNames.en, { required: true })}
          onKeyPress={handleKeyPress}
          onFocus={() => setCurrentStep('en')}
          className={currentStep === 'en' ? 'border-blue-500' : watchedValues[fieldNames.en] ? 'border-green-300' : ''}
        />
        {errors?.[fieldNames.en] && (
          <p className="text-red-500 text-sm mt-1">{String(errors[fieldNames.en]?.message || '')}</p>
        )}
      </div>

      {/* Georgian Input - Appears after English is filled */}
      {(currentStep === 'ka' || currentStep === 'ru' || currentStep === 'complete' || watchedValues[fieldNames.ka] || watchedValues[fieldNames.en]) && (
        <div>
          <label className="block text-sm font-medium mb-2 cursor-pointer" onClick={() => watchedValues[fieldNames.en] && setCurrentStep('ka')}>
            {labels.ka} {currentStep === 'ka' && <span className='text-blue-500'>(current)</span>}
            {watchedValues[fieldNames.ka] && currentStep !== 'ka' && <span className='text-green-500 ml-2'>✓</span>}
          </label>
          <Input 
            type="text" 
            placeholder={placeholders.ka}
            {...register(fieldNames.ka, { required: true })}
            onKeyPress={handleKeyPress}
            onFocus={() => watchedValues[fieldNames.en] && setCurrentStep('ka')}
            className={currentStep === 'ka' ? 'border-blue-500' : watchedValues[fieldNames.ka] ? 'border-green-300' : ''}
            disabled={!watchedValues[fieldNames.en]}
          />
          {errors?.[fieldNames.ka] && (
            <p className="text-red-500 text-sm mt-1">{String(errors[fieldNames.ka]?.message || '')}</p>
          )}
        </div>
      )}

      {/* Russian Input - Appears after Georgian is filled */}
      {(currentStep === 'ru' || currentStep === 'complete' || watchedValues[fieldNames.ru] || (watchedValues[fieldNames.en] && watchedValues[fieldNames.ka])) && (
        <div>
          <label className="block text-sm font-medium mb-2 cursor-pointer" onClick={() => watchedValues[fieldNames.ka] && setCurrentStep('ru')}>
            {labels.ru} {currentStep === 'ru' && <span className='text-blue-500'>(current)</span>}
            {watchedValues[fieldNames.ru] && currentStep !== 'ru' && <span className='text-green-500 ml-2'>✓</span>}
          </label>
          <Input 
            type="text" 
            placeholder={placeholders.ru}
            {...register(fieldNames.ru, { required: true })}
            onKeyPress={handleKeyPress}
            onFocus={() => watchedValues[fieldNames.ka] && setCurrentStep('ru')}
            className={currentStep === 'ru' ? 'border-blue-500' : watchedValues[fieldNames.ru] ? 'border-green-300' : ''}
            disabled={!watchedValues[fieldNames.ka]}
          />
          {errors?.[fieldNames.ru] && (
            <p className="text-red-500 text-sm mt-1">{String(errors[fieldNames.ru]?.message || '')}</p>
          )}
        </div>
      )}

      {/* Action Button */}
      <div className="flex gap-2">
        {currentStep !== 'complete' ? (
          <Button 
            type="button" 
            onClick={handleNext}
            disabled={!canProceed()}
            className="w-full"
          >
            {currentStep === 'en' && `Next: Add ${labels.ka}`}
            {currentStep === 'ka' && `Next: Add ${labels.ru}`}
            {currentStep === 'ru' && 'Ready to Submit'}
          </Button>
        ) : (
          <Button 
            type="button"
            onClick={onSubmit}
            disabled={isSubmitting || !watchedValues[fieldNames.en] || !watchedValues[fieldNames.ka] || !watchedValues[fieldNames.ru]}
            className="w-full"
          >
            {isSubmitting ? submittingText : submitButtonText}
          </Button>
        )}
      </div>

      {/* Progress indicator */}
      {showProgressIndicator && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className={currentStep === 'en' ? 'text-blue-500 font-medium' : watchedValues[fieldNames.en] ? 'text-green-500' : ''}>
            EN
          </span>
          <span>→</span>
          <span className={currentStep === 'ka' ? 'text-blue-500 font-medium' : watchedValues[fieldNames.ka] ? 'text-green-500' : ''}>
            KA
          </span>
          <span>→</span>
          <span className={currentStep === 'ru' ? 'text-blue-500 font-medium' : watchedValues[fieldNames.ru] ? 'text-green-500' : ''}>
            RU
          </span>
        </div>
      )}
    </div>
  );
}

export type { ThreeLanguageData, ThreeLanguageInputsProps }; 