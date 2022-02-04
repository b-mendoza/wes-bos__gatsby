import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent';
import type { NumberSchemaType } from '@sanity/types';
import React from 'react';

interface PriceInputProps {
  type: Pick<NumberSchemaType, 'description' | 'name' | 'title'>;
  value: string;
  onChange: (event: PatchEvent) => void;
}

const createPatchEvent = (value: string) =>
  PatchEvent.from(value.trim().length ? set(parseFloat(value)) : unset());

function PriceInput(
  props: PriceInputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const { type, value, onChange } = props;

  const inputChangeHandler = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      onChange(createPatchEvent(inputValue));
    },
    [onChange],
  );

  return (
    <>
      <h2>{type.title}</h2>

      {type.description ? <p>{type.description}</p> : null}

      <input
        ref={ref}
        type={type.name}
        value={value}
        onChange={inputChangeHandler}
      />
    </>
  );
}

const PriceInputRef = React.forwardRef<HTMLInputElement, PriceInputProps>(
  PriceInput,
);

export default PriceInputRef;
