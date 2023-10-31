import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupValidation } from "@/lib/validation";
import { Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { createUSerAccount } from "@/lib/appwrite/api";
import {
  userCreateUserAccount,
  userSigninAccount,
} from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";

const SignupForm = () => {
  const { toast } = useToast();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const navigate = useNavigate();

  const { mutateAsync: createUSerAccount, isPending: isCreatingUser } =
    userCreateUserAccount();

  const { mutateAsync: signInAccount, isPending: isSigningIn } =
    userSigninAccount();

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "Tachyon",
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    // Do something with the form values.
    const newUser = await createUSerAccount(values);
    //in case of no new user simply exit
    if (!newUser) {
      return toast({
        title: "Sign-up Failed,Try again",
      });
    }
    const session = await signInAccount({
      email: values.email,
      password: values.password,
    });
    if (!session) {
      return toast({ title: "Sign in failed , please try again" });
    }

    const isLoggedIn = await checkAuthUser();

    if (isLoggedIn) {
      form.reset();
      navigate("/");
    } else {
      return toast({
        title: "Sign up failed,you might want to Please try again",
      });
    }
  }
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img
          width={300}
          height={75}
          src="/assets/images/tachlogogram.svg"
          alt=""
        />
        <h2 className="h3-bold md:h2-bold mb-1 text-left ">
          Create a new Account
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          To use Tachgram,please enter your account details
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Harish"
                    type="text"
                    className="shad-input"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tachyon65"
                    type="text"
                    className="shad-input"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="harishtech@123@gmail.com"
                    type="email"
                    className="shad-input"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Godvalley@45_incident"
                    type="password"
                    className="shad-input"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary mt-1">
            {isCreatingUser ? (
              <div className="flex-center gap-2">
                <Loader /> Loading...
              </div>
            ) : (
              "sign up"
            )}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?
            <Link
              to="/sign-in"
              className="text-primary-500 text-small-semibold ml-1"
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignupForm;
