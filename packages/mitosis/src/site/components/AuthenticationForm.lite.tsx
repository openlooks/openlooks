import { Show } from '@builder.io/mitosis';
import Anchor from '../../components/Anchor.lite';
import Button from '../../components/Button.lite';
import Checkbox from '../../components/Checkbox.lite';
import Group from '../../components/Group.lite';
import PasswordInput from '../../components/PasswordInput.lite';
import Stack from '../../components/Stack.lite';
import TextInput from '../../components/TextInput.lite';

export interface AuthenticationFormProps {
  formType: 'register' | 'login';
}

export default function AuthenticationForm(props: AuthenticationFormProps) {
  return (
    <form>
      <Stack>
        <Show when={props.formType === 'register'}>
          <Group c="grow">
            <TextInput id="firstName" data-autofocus required placeholder="Your first name" label="First name" />
            <TextInput id="lastName" required placeholder="Your last name" label="Last name" />
          </Group>
        </Show>

        <TextInput
          id="email"
          required
          placeholder="Your email"
          label="Email"
          // icon={<IconAt size={16} stroke={1.5} />}
        />

        <PasswordInput
          id="password"
          required
          placeholder="Password"
          label="Password"
          // icon={<IconLock size={16} stroke={1.5} />}
        />

        <Show when={props.formType === 'register'}>
          <PasswordInput
            id="confirmPassword"
            required
            label="Confirm Password"
            placeholder="Confirm password"
            // icon={<IconLock size={16} stroke={1.5} />}
          />
        </Show>

        <Show when={props.formType === 'register'}>
          <Checkbox id="privacy" c="mt-sm" label="I agree to sell my soul and privacy to this corporation" />
        </Show>

        <Group c="position-apart">
          <Anchor c="color-gray size-sm" href="#">
            {props.formType === 'register' ? 'Have an account? Login' : "Don't have an account? Register"}
          </Anchor>

          <Button>{props.formType === 'register' ? 'Register' : 'Login'}</Button>
        </Group>
      </Stack>
    </form>
  );
}
