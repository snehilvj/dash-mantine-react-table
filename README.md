
# Dash Mantine React Table

The right datagrid for Dash when using [Dash Mantine Components](http://dash-mantine-components.com).

## Install

```shell
pip install dash_mantine_react_table
```

<img src="https://raw.githubusercontent.com/snehilvj/dash-mantine-react-table/master/assets/dmrt.png">

## Quickstart

```python
from dash_mantine_react_table import DashMantineReactTable

grid = DashMantineReactTable(
        data=data.to_dict("records"),
        columns=[{"accessorKey": i, "header": i} for i in data.columns],
        mrtProps={
            "enableHiding": False,
            "enableColumnFilters": False,
            "initialState": {"density": "sm"},
            "mantineTableProps": {"fontSize": "sm"},
            "mantineTableHeadCellProps": {"style": {"fontWeight": 500}},
        },
        mantineProviderProps={
            "theme": {
                "colorScheme": "dark",
            },
        },
    )
```
