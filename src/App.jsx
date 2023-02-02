import React from "react";
import ErrorBoundary from "~/components/ErrorBoundary";
import Layout from "~/components/Layout";
import ApplicationsList from "~/features/applications/components/List";



function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <ApplicationsList />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
