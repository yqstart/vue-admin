import _ from "lodash";

const parseEnv = (env: Record<string, any>): ImportMetaEnv => {
  const envs: any = _.cloneDeep(env);
  Object.entries(env).forEach(([key, value]) => {
    if (value === "true" || value === "false")
      envs[key] = value === "true" ? true : false;

    // 数值
    if (/^\d+$/.test(value)) envs[key] = Number(value);

    if (value === "null") envs[key] = null;

    if (value === "undefined") envs[key] = undefined;
  });
  return envs;
};

export default parseEnv;
