const API_BASE_URL = 'http://localhost:3000/api';

export const fetchSalesOverTime = async (interval) => {
    const response = await fetch(`${API_BASE_URL}/sales-over-time?interval=${interval}`);
    console.log(response);
    return response.json();
};

export const fetchSalesGrowthRate = async (interval) => {
    const response = await fetch(`${API_BASE_URL}/sales-growth-rate?interval=${interval}`);
    return response.json();
};

export const fetchNewCustomersOverTime = async (interval) => {
    const response = await fetch(`${API_BASE_URL}/new-customers-over-time?interval=${interval}`);
    return response.json();
};

export const fetchRepeatCustomers = async (interval) => {
    const response = await fetch(`${API_BASE_URL}/repeat-customers?interval=${interval}`);
    return response.json();
};

export const fetchCustomerDistribution = async () => {
    const response = await fetch(`${API_BASE_URL}/customer-distribution`);
    return response.json();
};

export const fetchCustomerLifetimeValue = async () => {
    const response = await fetch(`${API_BASE_URL}/customer-lifetime-value`);
    return response.json();
};
