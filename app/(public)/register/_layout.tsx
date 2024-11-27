import React from "react";
import { Stack } from "expo-router";
import { FormProvider, useForm } from "react-hook-form";

const Layout = () => {
    const methods = useForm();

    return (
        <FormProvider {...methods}>
            <Stack initialRouteName="stepOne/index">
                <Stack.Screen
                    name="stepOne/index"
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="stepTwo/index"
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="stepThree/index"
                    options={{
                        headerShown: false
                    }}
                />
            </Stack>
        </FormProvider>
    );
};

export default Layout;
