import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {type RegisterFormData, RegisterFormSchema} from "./schema.ts";

export function useRegisterNewUser() {
    const {register, handleSubmit, reset, formState: {errors, isSubmitting, isValid}} = useForm<RegisterFormData>({
        resolver: zodResolver(RegisterFormSchema),
        defaultValues: {
            userName: '',
            login: '',
            password: '',
            confirmPassword: '',
            agreement: false,
        },
    });
    const onSubmit = async (data: RegisterFormData) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {confirmPassword, agreement, ...payload} = data;
        console.log('отправляем на бэк', payload);
        reset();
    };


    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit,
        isValid,
    }
}
