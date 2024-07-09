"use client";

import React, { FC, useEffect, useState } from "react";
import useTrueWidth from "@/hooks/useTrueWidth";
import styles from "./ApTest.module.scss";
import { ApCheckbox, ApRadioGroup } from "..";

interface Options {
  title?: string;
  radios?: string[];
  checks?: string[];
  style?: object;
}

interface TestStyle extends React.CSSProperties {
  children?: React.CSSProperties;
}

interface ApTestProps {
  optionsLists: Options[];
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
  style?: TestStyle;
  width?: number | string;
  config?: React.ReactNode;
  children?: React.ReactNode;
}

const ApTest: FC<ApTestProps> = ({ optionsLists, setOptions, style, width = "100%", config, children }) => {
  // Checked array of all checkboxes available
  const [checked, setChecked] = useState<boolean | any[]>([]);
  // Checked value of indexed radio group in lists
  const [radioed, setRadioed] = useState<any[]>(
    optionsLists?.map((list: Options) => (list.radios && list.radios.length > 0 ? list.radios[0] : null)),
  );

  const trueWidth = useTrueWidth(width);

  useEffect(() => {
    if (Array.isArray(checked)) setOptions([...checked, ...radioed.filter((each) => each !== null)]);
  }, [checked, radioed, setOptions]);

  // Handle change of options
  const handleRadio = (value: any, index: number) => {
    const newRadio = [...radioed];
    newRadio[index] = value;
    setRadioed(newRadio);
  };

  return (
    <div className={styles.container} style={{ ...style, width: trueWidth }}>
      {optionsLists?.map((eachLists: Options, index: number) => (
        <React.Fragment key={index}>
          {eachLists.title && <div className={styles.title}>{eachLists.title}</div>}
          <div key={index} className={styles.group}>
            {eachLists.radios && (
              <ApRadioGroup
                value={radioed[index]}
                setValue={(value) => handleRadio(value, index)}
                options={eachLists.radios.map((radio: string) => ({ label: radio }))}
                horizontal
                gap="0px"
              />
            )}
            {eachLists.checks?.map((check: string) => (
              <ApCheckbox key={check} checked={checked} setChecked={setChecked} label={check} />
            ))}
          </div>
        </React.Fragment>
      ))}
      {config}
      <div className={styles.children} style={{ ...style?.children, width }}>
        {children}
      </div>
    </div>
  );
};

export default ApTest;
