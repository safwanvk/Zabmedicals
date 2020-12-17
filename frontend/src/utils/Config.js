class Config {
    static loginUrl = "http://127.0.0.1:8000/api/gettoken/";
    static homeUrl = "/home";
    static logoutPageUrl = "/logout";
    static refreshApiUrl = "http://127.0.0.1:8000/api/resfresh_token/";
    static companyApiUrl = "http://127.0.0.1:8000/api/company/";
    static companyBankApiUrl = "http://127.0.0.1:8000/api/company_bank/";
    static companyOnly = "http://127.0.0.1:8000/api/company_only/";
    static medicineApiUrl = "http://127.0.0.1:8000/api/medicine/";
    static companyAccountApiUrl = "http://127.0.0.1:8000/api/company_account/";
    static employeeApiURL = "http://127.0.0.1:8000/api/employee/";
    static employeeSalaryByIdApiUrl = "http://127.0.0.1:8000/api/employee_salary_by_id/";
    static employeeBankApiUrlBYID = "http://127.0.0.1:8000/api/employee_bank_by_id/";

    static sidebarItem = [
        { index: "0", title: "Home", url: "/home", icons: "home"},
        { index: "1", title: "Company", url: "/company", icons: "assessment"},
        { index: "2", title: "Add Medicine", url: "/addMedicine", icons: "assessment"},
        { index: "3", title: "Manage Medicine", url: "/manageMedicine", icons: "assessment"},
        { index: "4", title: "Manage Company Account", url: "/manageCompanyAccount", icons: "assessment"},
        { index: "5", title: "Manage Employee", url: "/employeeManage", icons: "assessment"},
    ]
}


export default Config;