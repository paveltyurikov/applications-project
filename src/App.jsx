import React from "react";
import ErrorBoundary from "~/components/ErrorBoundary";
import Layout from "~/components/Layout";
import ApplicationsList from "~/features/applications/components/List";
import AllProviders from "~/providers/AllProviders";


function App() {
  return (
    <AllProviders>
      <ErrorBoundary>
        <Layout>
          <ApplicationsList />
        </Layout>
      </ErrorBoundary>
    </AllProviders>
  );
}

export default App;
