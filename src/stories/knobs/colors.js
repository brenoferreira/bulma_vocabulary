import { select } from '@storybook/addon-knobs';

const Brands = {
    Blue: 'blue',
    Forest: 'forest',
    Gold: 'gold',
    Orange: 'orange',
    Tomato: 'tomato',
    Turquoise: 'turquoise',
    DarkSlateGray: 'dark-slate-gray'
};

export const brands = select('Brand', Brands, Brands.Tomato);

const Context = {
    Primary: 'primary',
    Info: 'info',
    Link: 'link',
    Success: 'success',
    Warning: 'warning',
    Error: 'danger',
};
  
  export const context = select('Context', Context, Context.Primary);