import supabase, { supabaseUrl } from "./supabase";

export const login = async ({ fullName, email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
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
