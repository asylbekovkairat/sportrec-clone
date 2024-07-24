import { Avatar, AvatarGroup, Badge, Box, Paper, Stack, Tab, Tabs, styled } from '@mui/material';
import { useState } from 'react';

import {
  AppButton,
  ArrowTopIcon,
  ConfirmedIcon,
  Divider,
  LocationMarkIcon,
  RussianRoundIcon,
  ShareIcon,
  StyledTab,
  StyledTabs,
} from '~shared/ui';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#F8F8F9',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '54px',
  height: '34px',
  padding: '8px 10px 8px 10px',
  gap: '8px',
  borderRadius: '8px',
  opacity: '0px',
  display: 'flex',
  alignItems: 'center',
  boxShadow: 'none',
}));

function a11yProps(index: number) {
  return {
    'id': `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const OrgMainInfo = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-full h-full rounded-[20px] bg-white mt">
      <div
        className="h-[170px] rounded-t-[20px]"
        style={{ background: 'linear-gradient(90deg, #09043E 0%, #29208B 100%)' }}
      ></div>
      <section className="px-5 relative h-[430px]">
        <div className="flex flex-col gap-4 relative bottom-[70px]">
          <div className="flex justify-between">
            <div className="w-[140px] h-[140px] flex items-end">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <div className="flex items-center justify-center rounded-full bg-white p-1">
                    <RussianRoundIcon />
                  </div>
                }
              >
                <Avatar
                  sx={{ width: 140, height: 140 }}
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
              </Badge>
            </div>
            <div className="mt-4 bg-[#F8F8F9] px-2 py-1 flex items-center gap-2 rounded-xl self-end">
              <ArrowTopIcon />
              <span className="text-[#7B7EA5]">№2</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h1 className="text-[#06082C] text-3xl">Спортивная Организация Алтайского Края</h1>
              <ConfirmedIcon />
            </div>
          </div>

          <div className="text-[#9395B8] flex items-center gap-1 text-sm font-medium">
            <LocationMarkIcon />
            <Stack direction="row" alignItems="center" gap={1} divider={<Divider />}>
              <span>Алтайский край</span>
              <span>Грэпплинг</span>
              <span>Греко-римская борьба</span>
              <span>Пляжная борьба</span>
            </Stack>
          </div>

          <div className="flex justify-start max-w-min gap-2">
            <AvatarGroup max={3}>
              {[
                'https://mui.com/static/images/avatar/1.jpg',
                'https://mui.com/static/images/avatar/1.jpg',
                'https://mui.com/static/images/avatar/1.jpg',
              ].map((src, index) => (
                <Avatar key={index} sx={{ width: 22, height: 22, zIndex: index }} src={src} />
              ))}
            </AvatarGroup>
            <Stack direction="row" alignItems="center" gap={1} divider={<Divider />}>
              <p className="text-black">
                45&nbsp;
                <span className="text-[#9395B8]">Спортсменов</span>
              </p>
              <p className="text-black">
                125&nbsp;
                <span className="text-[#9395B8]">Подписчиков</span>
              </p>
              <p className="text-black">
                12&nbsp;
                <span className="text-[#9395B8]">Лиг</span>
              </p>
            </Stack>
          </div>
          <Stack sx={{ marginTop: '12px' }} direction="row" alignItems="center" gap={1}>
            <Item>
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background:
                    'linear-gradient(275.71deg, #BE823B 3.64%, #D0A461 72.32%, #FED5A5 110.54%)',
                }}
              />
              12
            </Item>
            <Item>
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background:
                    'linear-gradient(275.71deg, #878788 3.64%, #BFC0C5 72.32%, #939499 110.54%)',
                }}
              />
              4
            </Item>
            <Item>
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background:
                    'linear-gradient(275.71deg, #74391D 3.64%, #C46236 72.32%, #FF9B67 110.54%)',
                }}
              />
              19
            </Item>
          </Stack>

          <div className="flex gap-2 mt-6">
            <AppButton background="#06082C" textColor="white" textWeight={500} padding="10px 24px">
              Подписаться
            </AppButton>
            <AppButton background="#EEF0F7" textColor="black" textWeight={500} padding="10px 24px">
              Подробнее
            </AppButton>
            <AppButton background="#EEF0F7" textColor="black" textWeight={500} padding="10px 13px">
              <ShareIcon />
            </AppButton>
          </div>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: '20px' }}>
            <StyledTabs value={value} onChange={handleChange} aria-label="org events tabs">
              <StyledTab sx={{ color: '#7B7EA5' }} label="Соревнования" {...a11yProps(0)} />
              <StyledTab sx={{ color: '#7B7EA5' }} label="Результаты" {...a11yProps(1)} />
              <StyledTab sx={{ color: '#7B7EA5' }} label="Новости" {...a11yProps(2)} />
            </StyledTabs>
          </Box>
        </div>
      </section>
    </div>
  );
};
