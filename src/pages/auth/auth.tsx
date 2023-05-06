import Layout from '@/components/Layout/Layout';

export default function Auth() {
  return (
    <Layout>
      <form>
        <label id="email">
          <input type="email" id="email" placeholder="Enter email..."></input>
        </label>
        <label id="password">
          <input type="password" id="password" placeholder="Enter password..."></input>
        </label>
        <button>Sign Up</button>
      </form>
    </Layout>
  );
}
