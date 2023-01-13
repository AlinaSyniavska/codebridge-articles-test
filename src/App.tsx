import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {ArticleDetailsPage, ArticlesPage, NotFoundPage} from "./pages";

const App:FC = () => {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'articles'}/>}/>
              <Route path={'articles'} element={<ArticlesPage/>}/>
              <Route path={'articles/:id'} element={<ArticleDetailsPage/>}/>
              <Route path={'*'} element={<NotFoundPage/>}/>
          </Route>
      </Routes>
  );
};

export {App};
