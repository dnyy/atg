import { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { RaceStart } from '../types';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

interface RowProps {
  row: RaceStart;
};
const Row: React.FC<RowProps> = ({ row }) => {
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  return (
    <Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.number}
        </TableCell>
        <TableCell align="right">{row.horse.name}</TableCell>
        <TableCell align="right">{row.driver.firstName} {row.driver.lastName}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography align="center" variant="h6" gutterBottom component="div">
                Mer info
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Tränare</TableCell>
                    <TableCell align="right">Hästens Far</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={row.horse.name}>
                      <TableCell align="right" component="th" scope="row">
                        {row.horse.trainer.firstName} {row.horse.trainer.lastName}
                      </TableCell>
                      <TableCell align="right">{row.horse.pedigree.father.name}</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

interface CollapsibleTableProps {
  starts: RaceStart[];
}

const CollapsibleTable: React.FC<CollapsibleTableProps> = ({ starts }) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Start</TableCell>
            <TableCell align="right">Häst</TableCell>
            <TableCell align="right">Kusk</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {starts.map((row) => (
            <Row key={row.number} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CollapsibleTable;