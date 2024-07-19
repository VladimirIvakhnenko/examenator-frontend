export interface StyledButton<T = 'small' | 'medium' | 'large'> {
    color: string,
    size: T;
    outline?: boolean,
    animated?: boolean,
}