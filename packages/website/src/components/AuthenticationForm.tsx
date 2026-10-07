import { Anchor } from "@openlooks/react";
import { Button } from "@openlooks/react";
import { Checkbox } from "@openlooks/react";
import { Group } from "@openlooks/react";
import { PasswordInput } from "@openlooks/react";
import { Stack } from "@openlooks/react";
import { TextInput } from "@openlooks/react";
import { IconAt } from "@openlooks/react";
import { IconLock } from "@openlooks/react";
export interface AuthenticationFormProps {
  formType: "register" | "login";
}
export function AuthenticationForm(props: AuthenticationFormProps) {
  return (
    <form>
      <Stack>
        <>
          {props.formType === "register" && (
            <Group c="grow">
              <TextInput
                id="firstName"
                required
                placeholder="Your first name"
                label="First name"
              />
              <TextInput
                id="lastName"
                required
                placeholder="Your last name"
                label="Last name"
              />
            </Group>
          )}
        </>

        <TextInput
          id="email"
          required
          placeholder="Your email"
          label="Email"
          slotIcon={<IconAt size="1rem" />}
        />

        <PasswordInput
          id="password"
          required
          placeholder="Password"
          label="Password"
          slotIcon={<IconLock size="1rem" />}
        />

        <>
          {props.formType === "register" && (
            <PasswordInput
              id="confirmPassword"
              required
              label="Confirm Password"
              placeholder="Confirm password"
              slotIcon={<IconLock size="1rem" />}
            />
          )}
        </>

        <>
          {props.formType === "register" && (
            <Checkbox
              id="privacy"
              c="mt-sm"
              label="I agree to sell my soul and privacy to this corporation"
            />
          )}
        </>

        <Group c="position-apart">
          <Anchor c="color-gray size-sm" href="#">
            {props.formType === "register"
              ? "Have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>

          <Button>
            {props.formType === "register" ? "Register" : "Login"}
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
