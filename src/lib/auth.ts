import api from "./api";

export interface Response {
  type: string;
  user: {
    id: string;
    name: string;
    email: string;
    cnpj?: string;
    hubId?: string;
    companyId?: string;
    isPreRegister?: boolean;
  };
}

export interface ISignInCredentials {
  email: string;
  password: string;
}

async function signIn(props: ISignInCredentials): Promise<Response | null> {
  try {
    const res = await api.post("/login", props);
    return res.data || null;
  } catch (err) {
    return null;
  }
}

async function getUserData(id: string, type: string): Promise<Response> {
  if(type === 'company') {
    const user = await api.get(`/user/${id}`)
    return {
      type: 'company',
      user: user.data
    }
  } 
  const incubator = await api.get(`/incubator/${id}`)
  return {
    type: 'incubator',
    user: incubator.data
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { signIn, getUserData };