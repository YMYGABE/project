//定义登录接口需要的数据
export interface loginFrom {
    username: string,
    password: string
}
interface dataType {
    token: string
}
//定义登录返回结果数据类型
export interface loginResponseData {
    code: number,
    data: dataType  //这是个对象，为什么没用object，是因为对象里的数据也是早就定义好的
}
interface userInfo {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string
}
interface user {
    checkUser: userInfo
}
export interface userResponseData {
    code: number,
    data: user
}