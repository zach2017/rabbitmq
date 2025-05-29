import React, { useState } from "react";
import { fetchFromDatabase } from "../backend/dbService";
import { fetchFromElastic } from "../backend/elasticService";
import { fetchFromRabbitMQ } from "../backend/rabbitmqService";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Typography,
  Box,
  Container,
  Paper
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface DataSource {
  source: string;
  data: any[];
}

const Dashboard: React.FC = () => {
  const [sources, setSources] = useState<DataSource[]>([]);

  const handleFetchData = () => {
    const dbData = fetchFromDatabase();
    const elasticData = fetchFromElastic();
    const rabbitData = fetchFromRabbitMQ();

    setSources([dbData, elasticData, rabbitData]);
  };

  return (
    <Container maxWidth="md">
      <Box textAlign="center" my={4}>
        <Typography variant="h4" gutterBottom>
          Company Data Dashboard
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleFetchData}
          sx={{ mt: 2 }}
        >
          Fetch Data from Sources
        </Button>
      </Box>

      {sources.map((source, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6">{source.source}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                backgroundColor: "#f5f5f5",
                borderRadius: 2
              }}
            >
              <Typography
                component="pre"
                variant="body2"
                sx={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-all"
                }}
              >
                {JSON.stringify(source.data, null, 2)}
              </Typography>
            </Paper>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default Dashboard;
