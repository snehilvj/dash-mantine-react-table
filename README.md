
# Dash Mantine React Table

The right datagrid for Dash when using [Dash Mantine Components](http://dash-mantine-components.com).

## Install

```shell
pip install dash_mantine_react_table==0.1.0a0
```

<img src="https://raw.githubusercontent.com/snehilvj/dash-mantine-react-table/master/assets/dmrt.png">

## Quickstart

```python
from dash_mantine_react_table import DashMantineReactTable

grid = DashMantineReactTable(
        data=data.to_dict("records"),
        columns=[{"accessorKey": i, "header": i, "maxSize": 100} for i in data.columns],
        mrtProps={
            "enableHiding": False,
            "enableColumnFilters": False,
            "enableDensityToggle": False,
            "enableColumnActions": False,
            "enableFullScreenToggle": False,
            "enableMultiRowSelection": False,
            "initialState": {"density": "sm", "showGlobalFilter": True},
            "mantineTableProps": {
                "fontSize": "sm",
                "sx": {"fontFamily": "'Inter', sans-serif"},
            },
            "mantineTableHeadCellProps": {"style": {"fontWeight": 500}},
            "mantineSearchTextInputProps": {"icon": None, "rightSection": None},
        },
        mantineProviderProps={
            "theme": {
                "colorScheme": "dark",
                "components": {"ActionIcon": {"styles": {"root": {"marginLeft": 5}}}},
            },
        },
    )
```
