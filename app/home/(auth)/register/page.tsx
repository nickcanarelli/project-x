import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ClientOnly } from "@components/core";
import RegisterForm from "./RegisterForm";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col">
        <div className="text-left text-2xl font-semibold tracking-[-0.464px] text-primary">
          Create your account
        </div>
        <p className="text-sm text-secondary">
          Signing up for [NAME] is fast and 100% free, no credit card required.
        </p>
      </div>

      <ClientOnly>
        <RegisterForm />
      </ClientOnly>

      <div className="flex flex-col gap-y-4">
        <Button
          group="normal"
          variant="primary"
          size="md"
          width="full"
          form="register"
          type="submit"
        >
          Create Account
        </Button>

        {/* <Divider text='or continue with' />

          <Button
            group='normal'
            variant='twitch'
            size='md'
            width='full'
            form='register'
            type='submit'
          >
            <FontAwesomeIcon icon={faTwitch} aria-hidden='true' className='h-4 w-4' />
            Twitch
          </Button>

          <Button
            group='normal'
            variant='riot'
            size='md'
            width='full'
            form='register'
            type='submit'
          >
            <RiotLogo className='fill-accent-contrast' width='16' height='16' />
            Riot Games
          </Button> */}

        <div className=" text-center text-sm font-medium text-secondary">
          Have an account?{" "}
          <Link
            href="/login"
            className="ml-2 inline-flex cursor-pointer items-center gap-x-2 font-semibold text-accent-primary"
          >
            Log in{" "}
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
