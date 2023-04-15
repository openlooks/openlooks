import { onMount } from '@builder.io/mitosis';
import Anchor from '../../components/Anchor.lite';
import Container from '../../components/Container.lite';
import Text from '../../components/Text.lite';
import Title from '../../components/Title.lite';
import IconPencil from '../../icons/IconPencil.lite';
import Prism from './Prism.lite';

import './DocPage.css';

export interface DocPageProps {
  title: string;
  description: string;
  children?: any;
}

export default function DocPage(props: DocPageProps) {
  onMount(() => {
    document.title = props.title + ' | Openlooks';
  });

  return (
    <>
      <div class="doc-header">
        <Container c="size-sm px-sm">
          <Title c="mt-0">{props.title}</Title>
          <Text c="description">{props.description}</Text>
          <div class="key-value">
            <div class="key">
              <Text c="color-gray size-sm">Import</Text>
            </div>
            <div class="value">
              <Prism language="js" c="p-0 m-0" code={`import { ${props.title} } from '@openlooks/mitosis';`} />
            </div>
          </div>
          <div class="key-value">
            <div class="key">
              <Text c="color-gray size-sm">Source</Text>
            </div>
            <div class="value">
              <Anchor href="https://github.com" c="size-sm">
                <div class="icon">
                  <svg viewBox="0 0 16 16" width="0.875rem" height="0.875rem" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                </div>
                View source code
              </Anchor>
            </div>
          </div>
          <div class="key-value">
            <div class="key">
              <Text c="color-gray size-sm">Docs</Text>
            </div>
            <div class="value">
              <Anchor href="https://github.com" c="size-sm">
                <div class="icon">
                  <IconPencil size="0.875rem" />
                </div>
                Edit this page
              </Anchor>
            </div>
          </div>
          <div class="key-value">
            <div class="key">
              <Text c="color-gray size-sm">Package</Text>
            </div>
            <div class="value">
              <Anchor href="https://npmjs.com" c="size-sm">
                <div class="icon">
                  <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" width="0.875rem" height="0.875rem">
                    <path d="M0 256V0h256v256z" fill="#C12127"></path>
                    <path d="M48 48h160v160h-32V80h-48v128H48z" fill="#FFF"></path>
                  </svg>
                </div>
                @openlooks/mitosis
              </Anchor>
            </div>
          </div>
        </Container>
      </div>
      <Container c="doc-body size-sm p-sm py-xl">{props.children}</Container>
    </>
  );
}
