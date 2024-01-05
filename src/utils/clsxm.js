import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const clsxm = (...classes) => twMerge(clsx(...classes));

export default clsxm;
