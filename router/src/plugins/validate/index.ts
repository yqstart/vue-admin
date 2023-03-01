import * as veeValidate from "vee-validate";
import rules from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
import yup from "@/plugins/validate/yup";

veeValidate.configure({
  generateMessage: localize("zh_CN", zh_CN) as any,
});

Object.keys(rules).forEach((key) => {
  veeValidate.defineRule(key, rules[key] as any);
});

const modules = {
  yup,
  ...veeValidate,
};
export default modules;
