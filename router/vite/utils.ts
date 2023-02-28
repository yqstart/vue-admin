import _ from "lodash";

const parseEnv = (env: Record<string, any>): ViteEnv => {
  const envs: any = _.cloneDeep(env);
  Object.entries(env).forEach(([key, value]) => {
    if (value === "true" || value === "false") {
      envs[key] = value === "true" ? true : false;
    }
    // 数值
    if (/^\d+$/.test(value)) {
      envs[key] = parseInt(value);
    }
  });
  return envs
};

export default parseEnv;
