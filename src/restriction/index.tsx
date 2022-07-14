import React from 'react';

type RandomNamberType = {
   value: number;
}

type PositiveNumberType = RandomNamberType & {
   isPositive: boolean;
   isNegative?: never;
   isZero?: never;
}

type NegativeNumberType = RandomNamberType & {
   isNegative: boolean;
   isPositive?: never;
   isZero?: never;
}

type ZeroNumberType = RandomNamberType & {
   isZero: boolean;
   isPositive?: never;
   isNegative?: never;
}

type RandomNamberProps = PositiveNumberType | NegativeNumberType | ZeroNumberType;

function RandomNamber({ value, isPositive, isNegative, isZero }: RandomNamberProps) {
   return (
      <div>
         <strong>Random number - {value}</strong> <br />
         <span>
            {isPositive ? 'Positive number ' : ''}
            {isNegative ? 'Negative number ' : ''}
            {isZero ? 'Zero number' : ''}
         </span>
      </div>
   )
}

export default RandomNamber;