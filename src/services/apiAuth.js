import supabase, { supabaseUrl } from "./supabase";
import { BASE_URL } from "../base";

export const login = async ({ email, password }) => {
  try {
    const res = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    supabase.auth.setSession(data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw new Error(error.message);
  }
  return data?.user;
};
