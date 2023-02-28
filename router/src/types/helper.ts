import _ from "lodash";
class Helper {
  public env = {} as ImportMetaEnv;
  constructor() {
    this.env = this.getEnvs();
  }

  private getEnvs() {
    const envs: any = _.cloneDeep(import.meta.env);
    Object.entries(import.meta.env as Record<string, any>).forEach(
      ([key, value]) => {
        if (value === "true" || value === "false")
          envs[key] = value === "true" ? true : false;

        // 数值
        if (/^\d+$/.test(value)) envs[key] = Number(value);

        if (value === "null") envs[key] = null;

        if (value === "undefined") envs[key] = undefined;
      }
    );
    return envs;
  }
}

const helper = new Helper();
const env = helper.env;
export default Helper;
export { env };
