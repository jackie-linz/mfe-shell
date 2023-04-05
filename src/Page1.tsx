import { Link, Route, Routes } from 'react-router-dom';

function Page1() {
  return (
    <div>
      <h1>Shell Page 1</h1>
      <nav>
        <ul>
          <li>
            <Link to="child1">Child 1</Link>
          </li>
          <li>
            <Link to="child2">Child 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="child1" element={<div>child1 content</div>} />
        <Route path="child2" element={<div>child2 content</div>} />
      </Routes>
    </div>
  );
}

export default Page1;
