import { useEffect } from "react";
import validator from "validator";

function LoginFunction() {
    const validateEmailOrPhone = (input) => {
        if (validator.isEmail(input)) {
            return 'email';
        } else if (validator.isMobilePhone(input, 'vi-VN')) {
            return 'phone';
        } else {
            return 'invalid';
        }
    };

    useEffect(() => {
        console.log(validateEmailOrPhone("abc@gmail.com")); // email
        console.log(validateEmailOrPhone("0901234567"));    // phone
        console.log(validateEmailOrPhone("abc123"));        // invalid
    }, []);

    return <div>Kiểm tra console.log</div>;
}

export default LoginFunction;

