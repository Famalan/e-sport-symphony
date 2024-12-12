"use client";

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolve";
import * as z from "zod";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
    username: z.string().min(3, {
        message: "Имя пользователя должно содержать минимум 3 символа",
    }),
    password: z.string().min(6, {
        message: "Пароль должен содержать минимум 6 символов",
    }),
});

export function LoginForm() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setIsLoading(true);
            await login(values.username, values.password);
            
            const from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
            
            toast({
                title: "Успешный вход",
                description: "Добро пожаловать в систему",
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Ошибка входа",
                description: "Проверьте правильность введенных данных",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="mx-auto max-w-sm space-y-6">
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold">Вход в систему</h1>
                <p className="text-gray-500">
                    Введите свои данные для входа
                </p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Имя пользователя</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isLoading}
                                        placeholder="Введите имя пользователя"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Пароль</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isLoading}
                                        type="password"
                                        placeholder="Введите пароль"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                    >
                        {isLoading ? "Вход..." : "Войти"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}