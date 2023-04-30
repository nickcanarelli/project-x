import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ClientOnly } from "@components/core";
import LoginForm from "./LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col">
        <div className="text-left text-2xl font-semibold tracking-[-0.464px] text-primary">
          Log in
        </div>
        <p className="text-sm text-secondary">Add some text here?</p>
      </div>

      <ClientOnly>
        <LoginForm />
      </ClientOnly>

      <div className="flex flex-col gap-y-4">
        <Button
          group="normal"
          variant="primary"
          size="md"
          width="full"
          form="login"
          type="submit"
        >
          Continue
        </Button>

        <div className="text-center text-sm font-medium text-secondary">
          New to [NAME]?{" "}
          <Link
            href="/register"
            className="ml-2 inline-flex cursor-pointer items-center gap-x-2 font-semibold text-accent-primary"
          >
            Sign up for free{" "}
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              aria-hidden="true"
              className="text-sm"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
