// // src/components/SongForm.tsx

// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import styled from 'styled-components';
// import { space, layout, SpaceProps, TypographyProps, LayoutProps } from 'styled-system';
// import { addSongRequest, updateSongRequest } from '../redux/slices/songSlice';

// interface FormWrapperProps extends SpaceProps, TypographyProps, LayoutProps {}

// const FormWrapper = styled.form<FormWrapperProps>`
//   ${space}
//   ${layout}
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const Input = styled.input`
//   padding: 8px;
//   border-radius: 4px;
//   border: 1px solid #ccc;
// `;

// const SubmitButton = styled.button`
//   background-color: #1890ff;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   padding: 10px 15px;
//   cursor: pointer;
//   &:hover {
//     background-color: #40a9ff;
//   }
// `;

// interface NewSong {
//   title: string;
//   artist: string;
//   album: string;
//   genre: string;
// }

// interface ExistingSong extends NewSong {
//   id: string;
// }

// interface SongFormProps {
//   initialData?: ExistingSong;
//   isEdit?: boolean;
//   onSubmit: () => void;
// }

// const SongForm: React.FC<SongFormProps> = ({ initialData, isEdit = false, onSubmit }) => {
//   const [title, setTitle] = useState(initialData?.title || '');
//   const [artist, setArtist] = useState(initialData?.artist || '');
//   const [album, setAlbum] = useState(initialData?.album || '');
//   const [genre, setGenre] = useState(initialData?.genre || '');
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (initialData) {
//       setTitle(initialData.title);
//       setArtist(initialData.artist);
//       setAlbum(initialData.album);
//       setGenre(initialData.genre);
//     }
//   }, [initialData]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const songData: NewSong | ExistingSong = { title, artist, album, genre };

//     if (isEdit && initialData?.id) {
//       dispatch(updateSongRequest({ id: initialData.id, ...songData })); // Dispatch update action
//     } else {
//       dispatch(addSongRequest(songData)); // Dispatch add action
//     }

//     // Clear form fields after submission
//     setTitle('');
//     setArtist('');
//     setAlbum('');
//     setGenre('');

//     // Notify parent component that submission is done
//     onSubmit();
//   };

//   return (
//     <FormWrapper p={3} width={[1, 1 / 2]} onSubmit={handleSubmit}>
//       <Input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//         required
//       />
//       <Input
//         type="text"
//         value={artist}
//         onChange={(e) => setArtist(e.target.value)}
//         placeholder="Artist"
//         required
//       />
//       <Input
//         type="text"
//         value={album}
//         onChange={(e) => setAlbum(e.target.value)}
//         placeholder="Album"
//         required
//       />
//       <Input
//         type="text"
//         value={genre}
//         onChange={(e) => setGenre(e.target.value)}
//         placeholder="Genre"
//         required
//       />
//       <SubmitButton type="submit">
//         {isEdit ? 'Update Song' : 'Add Song'}
//       </SubmitButton>
//     </FormWrapper>
//   );
// };

// export default SongForm;


import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { space, layout, SpaceProps, TypographyProps, LayoutProps } from 'styled-system';
import { addSongRequest, updateSongRequest } from '../redux/slices/songSlice';

interface FormWrapperProps extends SpaceProps, TypographyProps, LayoutProps {}

const FormWrapper = styled.form<FormWrapperProps>`
  ${space}
  ${layout}
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: #40a9ff;
  }
`;

interface NewSong {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface ExistingSong extends NewSong {
  id: string;
}

interface SongFormProps {
  initialData?: ExistingSong;
  isEdit?: boolean;
  onSubmit: () => void;
}

const SongForm: React.FC<SongFormProps> = ({ initialData, isEdit = false, onSubmit }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [artist, setArtist] = useState(initialData?.artist || '');
  const [album, setAlbum] = useState(initialData?.album || '');
  const [genre, setGenre] = useState(initialData?.genre || '');
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setArtist(initialData.artist);
      setAlbum(initialData.album);
      setGenre(initialData.genre);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const songData: NewSong | ExistingSong = { title, artist, album, genre };

    if (isEdit && initialData?.id) {
      console.log('Submitting update:', { id: initialData.id, ...songData }); // Debugging log
      dispatch(updateSongRequest({ id: initialData.id, ...songData })); // Dispatch update action
    } else {
      console.log('Submitting new song:', songData); // Debugging log
      dispatch(addSongRequest(songData)); // Dispatch add action
    }

    // Clear form fields after submission
    setTitle('');
    setArtist('');
    setAlbum('');
    setGenre('');

    // Notify parent component that submission is done
    onSubmit();
  };

  return (
    <FormWrapper p={3} width={[1, 1 / 2]} onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <Input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Artist"
        required
      />
      <Input
        type="text"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
        placeholder="Album"
        required
      />
      <Input
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Genre"
        required
      />
      <SubmitButton type="submit">
        {isEdit ? 'Update Song' : 'Add Song'}
      </SubmitButton>
    </FormWrapper>
  );
};

export default SongForm;

