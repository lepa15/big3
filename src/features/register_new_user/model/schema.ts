import * as z from 'zod';

export const RegisterFormSchema = z
    .object({
        userName: z.string().min(2, 'Минимум 2 символа'),
        login: z.string().min(3, 'Минимум 3 символа'),
        password: z
            .string()
            .min(6, 'Минимум 6 символов')
            .regex(/[A-Z]/, 'Добавь хотя бы одну заглавную букву')
            .regex(/[0-9]/, 'Добавь хотя бы одну цифру'),
        confirmPassword: z.string(),
        agreement: z.boolean().refine((val) => val === true, {
            message: 'Подтверди правила соглашения',
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Пароли не совпадают',
        path: ['confirmPassword'],
    });

export type RegisterFormData = z.infer<typeof RegisterFormSchema>;
export type RegisterRequest = Omit<RegisterFormData, 'confirmPassword'>;
