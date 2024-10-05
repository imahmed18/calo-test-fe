import { useLocation, matchPath } from 'react-router-dom';
import { paths } from '../paths';

export function useActiveLink(path, deep = true) {
  const { pathname } = useLocation();

  const basePath = paths.PATH_JOB.root;

  const checkPath = doesPathNameIncludePath(basePath, pathname, path);

  const normalActive = path ? !!matchPath({ path, end: true }, pathname) : false;

  const deepActive = path ? !!matchPath({ path, end: false }, pathname) : false;

  return deep ? deepActive : normalActive === false ? checkPath : normalActive;
}

function doesPathNameIncludePath(basePath, pathName, path) {
  const cleanedPathName = pathName?.replace(basePath, '');
  const cleanedPath = path?.replace(basePath, '');

  return path === basePath ? false : cleanedPathName.includes(cleanedPath);
}
