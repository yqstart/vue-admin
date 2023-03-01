<template>
  <Form
    :validation-schema="{
      account: v.yup.string().required().email().label('账号'),
      password: v.yup
        .string()
        .required()
        .min(6, '密码必须大于6位')
        .label('密码'),
    }"
    @submit="onSubmit"
    class="bg-slate-300 h-screen flex justify-center items-start md:items-center p-5"
  >
    <div
      class="w-[720px] md:grid grid-cols-2 bg-white rounded-lg shadow-md overflow-hidden translate-y-1/3 md:translate-y-0"
    >
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-2xl mt-8">会员登录</h2>
          <div class="mt-8">
            <Field
              name="account"
              type="email"
              class="login-input"
              placeholder="请输入用户名"
            />
            <ErrorMessage name="account" as="div" class="input-error" />
            <Field
              name="password"
              type="password"
              class="login-input mt-4"
              placeholder="请输入密码"
            />
            <ErrorMessage name="password" as="div" class="input-error" />
          </div>
          <RButton />
          <div class="flex justify-center items-center mt-4">
            <i
              class="fa-brands fa-weixin bg-green-600 text-white rounded-full cursor-pointer p-1"
            ></i>
          </div>
        </div>
        <div class="flex gap-2 justify-center mt-4">
          <RLink />
        </div>
      </div>
      <div class="hidden md:block relative">
        <img
          src="/image/login.jpg"
          class="absolute h-full w-full object-cover"
        />
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import v from "@/plugins/validate";
import userApi from "@/apis/userApi";
import { store } from "@/utils";
const { Form, Field, ErrorMessage } = v;

const form = reactive<{ account: number | string; password: string }>({
  account: "abc",
  password: "",
});
const onSubmit = async (values: any) => {
  const {
    result: { token },
  } = await userApi.login(values);
  store.set("token", {
    expire: 100,
    token,
  });
};
</script>

<style scoped lang="scss">
//.login-button {
//  @apply bg-violet-800 text-white w-full py-2 rounded-md hover:bg-violet-500 duration-300;
//}
</style>
