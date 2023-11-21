<template>
    <div
        class="min-h-screen win-w-screen flex items-center justify-center p-4 overflow-hidden bg-slate-100 dark:bg-gray-900"
    >
        <UCard class="w-full max-w-sm">
            <template #header>
                <h1>Login</h1>
                <p>Welcome, insan UAI!</p>
            </template>

            <UForm :state="state" :schema="schema" @submit="submit">
                <template v-if="errors.email?.[0]">
                    <UAlert
                        title="Error"
                        :description="errors.email?.[0]"
                        color="red"
                        class="mb-6"
                    />
                </template>
                <UFormGroup label="Email" name="email">
                    <UInput v-model="state.email" />
                </UFormGroup>
                <UFormGroup label="Password" name="password" class="mt-2">
                    <UInput v-model="state.password" type="password" />
                </UFormGroup>
                <UFormGroup name="remember" class="mt-2">
                    <UCheckbox v-model="state.remember" label="Remember me" />
                </UFormGroup>

                <UButton
                    type="submit"
                    label="Sign in"
                    class="mt-4"
                    block
                    :disabled="inProgress"
                />
            </UForm>
        </UCard>
    </div>
</template>

<script lang="ts" setup>
import Joi from "joi";

const router = useRouter();
const route = useRoute();

const schema = Joi.object({
    email: Joi.string().email({ tlds: false }).required(),
    password: Joi.string().required(),
    remember: Joi.boolean(),
});

const state = reactive({
    email: undefined,
    password: undefined,
    remember: false,
});

const status = ref(
    (route.query.reset ?? "").length > 0
        ? atob(route.query.reset as string)
        : ""
);

const { login } = useAuth();

const {
    submit,
    inProgress,
    validationErrors: errors,
} = useSubmit(
    () => {
        status.value = "";
        return login(state);
    },
    {
        onSuccess: () => router.push("/dashboard"),
    }
);
</script>

<style></style>
