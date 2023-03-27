import React, { useMemo } from "react";
import { DashComponentProps } from "../props";
import { MantineReactTable } from "mantine-react-table";
import type { MRT_ColumnDef } from "mantine-react-table";
import { MantineProvider } from "@mantine/core";

type Props = {
  /** data */
  data: any[];
  /** columns */
  columns: any[];
  /** MRT props */
  mrtProps?: any;
  /** MantineProvider theme */
  mantineProviderProps?: any;
} & DashComponentProps;

/**
 * A simple wrapper over Mantine React Table. For more information have a look at https://www.mantine-react-table.com.
 */
const DashMantineReactTable = (props: Props) => {
  const { columns, data, mrtProps, mantineProviderProps } = props;
  const cols = useMemo<MRT_ColumnDef<any>[]>(() => columns, []);

  return (
    <MantineProvider {...mantineProviderProps}>
      <MantineReactTable columns={cols} data={data} {...mrtProps} />
    </MantineProvider>
  );
};

DashMantineReactTable.defaultProps = {};

export default DashMantineReactTable;
