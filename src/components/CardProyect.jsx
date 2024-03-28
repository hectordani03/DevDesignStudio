import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import { Stepper } from './ModalProyects';
import { useState } from 'react';

export const CardProyects = ({ src, title, info, modalImages }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card sx={{ 
        minHeight: '280px', width: 620, border: 'none', borderRadius: '20px',
        '@media screen and (max-width: 635px)': {
            width: '550px',
        },
        '@media screen and (max-width: 575px)': {
            width: '100%',
        },
        '@media screen and (max-width: 460px)': {
            width: '90%',
        },
        }}>
      <CardCover>
        <img
          src={src}
          srcSet={src}
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0) 300px)',
        }}
      />
                  <CardContent sx={{ justifyContent: 'flex-end' }}
                  >
                <Typography level="title-lg" textColor="#fff">
                    {title}
                </Typography>
                <Typography  textColor="#fff">
                    {info}
                </Typography>
                <button
                    className='bg-emerald-500 w-2/12 rounded-2xl text-white absolute right-4 py-1 text-md font-semibold'
                    onClick={() => setOpen(true)}
                >
                    Ver mas
                </button>
                <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={open}
                    onClose={() => setOpen(false)}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    
                >
                    <Sheet
                        sx={{
                            width: '80%',
                            borderRadius: 'md',
                            p: 3,
                            boxShadow: 'lg',
                        }}
                        className="dark:bg-slate-800"
                    >
                        <ModalClose variant="plain" sx={{ m: 1 }}
                        className="dark:bg-slate-800" />
                        {open && (
                            <Stepper
                                images={modalImages} // Pasa la lista de imágenes al modal
                                
                            />
                        )}
                    </Sheet>
                </Modal>
            </CardContent>
        </Card>
    );
};

