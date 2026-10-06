import React from "react";
import Anchor from "../../components/Anchor";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Group from "../../components/Group";
import PasswordInput from "../../components/PasswordInput";
import Stack from "../../components/Stack";
import TextInput from "../../components/TextInput";
import IconAt from "../../icons/IconAt";
import IconLock from "../../icons/IconLock";
export interface AuthenticationFormProps {
    formType: 'register' | 'login';
}
export default function AuthenticationForm(props: AuthenticationFormProps) {
    return (<form>
      <Stack>
        <>{props.formType === 'register' && <Group c="grow">
            <TextInput id="firstName" required placeholder="Your first name" label="First name"/>
            <TextInput id="lastName" required placeholder="Your last name" label="Last name"/>
          </Group>}</>

        <TextInput id="email" required placeholder="Your email" label="Email" slotIcon={<IconAt size="1rem"/>}/>

        <PasswordInput id="password" required placeholder="Password" label="Password" slotIcon={<IconLock size="1rem"/>}/>

        <>{props.formType === 'register' && <PasswordInput id="confirmPassword" required label="Confirm Password" placeholder="Confirm password" slotIcon={<IconLock size="1rem"/>}/>}</>

        <>{props.formType === 'register' && <Checkbox id="privacy" c="mt-sm" label="I agree to sell my soul and privacy to this corporation"/>}</>

        <Group c="position-apart">
          <Anchor c="color-gray size-sm" href="#">
            {props.formType === 'register' ? 'Have an account? Login' : "Don't have an account? Register"}
          </Anchor>

          <Button>{props.formType === 'register' ? 'Register' : 'Login'}</Button>
        </Group>
      </Stack>
    </form>);
}
