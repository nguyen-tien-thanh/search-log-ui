import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = () => {
  const [data, setData] = React.useState([]);
  const [moduleName, setModuleName] = React.useState("");
  const [folder, setFolder] = React.useState("");
  const [content, setContent] = React.useState("");
  const [selectedFolders, setSelectedFolders] = React.useState([]);
  const [date, setDate] = React.useState(dayjs(new Date()));
  const [errorLog, setErrorLog] = React.useState({});

  const handleModuleChange = (e) => {
    const selectedModule = e.target.value;
    setModuleName(selectedModule);

    const module = data.find((item) => item.moduleName === selectedModule);
    setSelectedFolders(module ? module.folders : []);
  };

  const handleSubmit = async (e) => {
    if (!moduleName) alert("Please select a module");

    // Uncomment to use when have URL
    // try {
    //   const response = await fetch(""); // URL to FETCH;
    //   if (response.ok) {
    //     const result = await response.json();
    //     setErrorLog(result);
    //   }
    // } catch (error) {
    //   console.error("Fetch error:", error);
    //   alert("Fetch error: " + error);
    // }

    // Remove
    // Mock data for testing
    setErrorLog({
      data: [
        {
          lineNumber: 3,
          logs: [
            "2024-08-16 10:35:12 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "2024-08-16 10:35:12 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "2024-08-16 10:35:12 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          ],
        },
        {
          lineNumber: 5,
          logs: [
            "2024-08-16 10:35:12 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "2024-08-16 10:35:12 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "2024-08-16 10:35:12 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "2024-08-16 10:35:12 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "2024-08-16 10:35:12 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "2024-08-16 10:35:12 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          ],
        },
      ],
    });
  };

  React.useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(""); // URL to FETCH;
        if (response.ok) {
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        alert("Fetch error: " + error);
      }
    };

    // Uncomment to use the fetchAPI function
    // fetchAPI();

    // Remove
    // Mock data for testing
    const mockData = [
      { moduleName: "wallet-service", folders: ["scheduler", "service"] },
      { moduleName: "transaction-service", folders: ["fly", "swim"] },
      { moduleName: "login-service", folders: [] },
    ];
    setData(mockData);
  }, []);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-5 flex-col sm:flex-row">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="space-y-5">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField
                sx={{ width: 280 }}
                value={date}
                onChange={(newDate) => setDate(newDate)}
                enableAccessibleFieldDOMStructure
                label="Date"
                format="DD-MM-YYYY"
              />
            </LocalizationProvider>

            <Box sx={{ width: 280 }}>
              <FormControl fullWidth>
                <InputLabel id="module-name-select">Module name</InputLabel>
                <Select
                  labelId="module-name-select"
                  value={moduleName}
                  label="Module Name"
                  onChange={handleModuleChange}
                >
                  {data.map((item) => (
                    <MenuItem key={item.moduleName} value={item.moduleName}>
                      {item.moduleName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {selectedFolders.length > 0 && (
              <Box sx={{ width: 280 }}>
                <FormControl fullWidth>
                  <InputLabel id="folder-select">Folders</InputLabel>
                  <Select
                    labelId="folder-select"
                    value={folder}
                    label="Folders"
                    onChange={(e) => setFolder(e.target.value)}
                  >
                    {selectedFolders.map((folder) => (
                      <MenuItem key={folder} value={folder}>
                        {folder}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            )}

            {moduleName && (
              <TextField
                id="outlined-basic"
                label="Content"
                variant="outlined"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                sx={{ width: 280 }}
                multiline
                rows={15}
              />
            )}
          </div>
          <Button variant="contained" onClick={handleSubmit}>
            Search
          </Button>
        </div>

        <div className="rounded w-full h-[calc(100vh-80px-64px)] p-2 overflow-auto border border-gray-300 border-dashed">
          {errorLog.data ? (
            errorLog.data.map((item) => (
              <div
                key={item.lineNumber}
                className="border-b-4 border-gray-300 last:border-b-0"
              >
                <ul className="pb-2">
                  {item.logs.map((log, index) => (
                    <li
                      key={index}
                      className={`text-sm rounded p-2 
                        ${
                          index + 1 === +item.lineNumber
                            ? "bg-red-200"
                            : "hover:bg-gray-100"
                        }
                      `}
                    >
                      {log}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div className="flex h-full justify-center items-center flex-col animate-pulse cursor-not-allowed select-none">
              <p>No logs found.</p>
              <p>Please search from left.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
