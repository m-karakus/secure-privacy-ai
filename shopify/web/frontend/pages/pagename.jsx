import { Card, Page, Layout, TextContainer, Text } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";

import { gql, useMutation } from "@apollo/client";
function ScriptPage(){
  const CREATE_SCRIPTING_QUERY = gql`mutation {
    scriptTagCreate(input: {
        cache: false,
        displayScope: ALL,
        src: "https://frontend-test.secureprivacy.ai/script/64f8594676149b136b618ed1.js"
    }) {
        scriptTag {
            id
            src
            displayScope
        }

    }
}`

  const [createScriptTagMutation, { data }] = useMutation(CREATE_SCRIPTING_QUERY);
  createScriptTagMutation();
  console.log("Primary action");
  console.log(CREATE_SCRIPTING_QUERY);
  return
}



export default function PageName() {
  const { t } = useTranslation();
  return (
    <Page>
      <TitleBar
        title={t("PageName.title")}
        primaryAction={{
          content: t("PageName.primaryAction"),
          onAction: () => ScriptPage(),
        }}
        secondaryActions={[
          {
            content: t("PageName.secondaryAction"),
            onAction: () => console.log("Secondary action"),
          },
        ]}
      />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Text variant="headingMd" as="h2">
              {t("PageName.heading")}
            </Text>
            <TextContainer>
              <p>{t("PageName.body")}</p>
            </TextContainer>
          </Card>
          <Card sectioned>
            <Text variant="headingMd" as="h2">
              {t("PageName.heading")}
            </Text>
            <TextContainer>
              <p>{t("PageName.body")}</p>
            </TextContainer>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card sectioned>
            <Text variant="headingMd" as="h2">
              {t("PageName.heading")}
            </Text>
            <TextContainer>
              <p>{t("PageName.body")}</p>
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
