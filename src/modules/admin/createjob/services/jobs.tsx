import instance from "@/lib/axios";

export const getJobsByCategoryId = async (categoryId: string) => {
  try {
    const response = await instance.get(`/api/categories/${categoryId}/jobs`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createJobInCategory = async (jobData: {
  categoryId: string;
  title: {
    en: string;
    ru: string;
    ka: string;
  };
  description: {
    en: string;
    ru: string;
    ka: string;
  };
}) => {
  try {
    const response = await instance.post(`/api/categories/jobs`, jobData);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteJobInCategory = async (
  categoryId: string,
  jobId: string
) => {
  try {
    const response = await instance.delete(
      `/api/categories/${categoryId}/jobs/${jobId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateJobInCategory = async (
  categoryId: string,
  jobId: string,
  jobData: {
    title: {
      en: string;
      ru: string;
      ka: string;
    };
    description: {
      en: string;
      ru: string;
      ka: string;
    };
  }
) => {
  try {
    const response = await instance.put(
      `/api/categories/${categoryId}/jobs/${jobId}`,
      jobData
    );
    return response.data;
  } catch (error) { 
    console.log(error);
    throw error;
  }
};
