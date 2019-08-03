export default interface IAuthentication {
    userName: string;
    phone: number;
    email: string;
    password: string;
    securityQuestions: {
        question: string | null;
        answer: string;
    };
  }
