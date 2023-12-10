import Layout from "../../components/layout/Layout";
import { Link } from 'react-router-dom';
import "./Index.css";

function Index() {
  return (
    <Layout>
      <div className="content-home">
        <div className="home">
          <h1>Foody Love</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            quisquam itaque fugiat optio eos saepe possimus delectus magni
            distinctio, tempore aliquam culpa ullam sunt enim quam ducimus,
            voluptatibus voluptates nemo.
          </p>
          <button><Link to="/menu" className="link">Menu</Link></button>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
