import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import Gallery from "react-grid-gallery";

import Logo from "./Logo";
import BackgroundParticle from "./BackgroundParticle";
import Speakers from "../speakers/Speakers";
import Sponsors from "../sponsors/Sponsors";
import Venue from "../venue/Venue";
import Schedule from "../schedule/Schedule";

import "./Home.css";

const IMAGES = [
	{
		src:
			"https://lh3.googleusercontent.com/Rdrf27GBd8qofirLp91Hz9WwnAyxddl0hxP5eNM43AsO71qfy8k6CojFKPXsIBftV5RbvUM1pfG-uKCBr2-nfyhXEgffRQAAqL8h2S550vN9u9qff2FeTJbfGacNS5w-rj32DN3aktrIi8my3M9dLLgoYlWiRSYaO3tk5LkXGToqF803PM9k7zVdoiGPmgXHLFTHnyDLsKUYVPMuk0hSD-N1OoDzD3S9UWtS2hnj_hvbT87onPFtFH-5JcnftGXJfKeuAEo8Tev71PtOZI9UaPUYkmFgYZbKLfg19dwcl14thu8Mxdtp-1n7gCLUrIXnPEb3Ms6WywW2GYEAylrjkOZI86dxX1_UmeGWyVT06II-j27A7xCT5azV-OniEU9uc8jpbLw7t1V8muiuCTKSKBu_emDVqsiOGYR-iT3tlEiySYY9OBSZ_1_yR-ssRwhETi4y4j9iaAKObUf4UKYH5KWBWKurcNCIhi-QvkWApHt_4vWl96a_S7wjSpuiUB40-WW7_PnPx37Xmcn1vzRYKEa-rbTd2Xoxws81C0NmvOOjacqE2Wc4sieyVQc_ausUnwvPOJJEXk_PX8pXYFi1y3HSeJl1xk68q7W3lxtrIDgNUIvFWmjmJ6f1bMBpokbUJppCAAMrCOeTkb28wfBJ2ehaXjw1FgrV3o9zWyfA2TWzPxZYN5qu5tafOU3XbeemXkWVrEvvvFYnZpyp5T47XbT8xP7NLdMHEHnEsJ0-Mqc3Teo=w1643-h867-no",
		thumbnail:
			"https://lh3.googleusercontent.com/Rdrf27GBd8qofirLp91Hz9WwnAyxddl0hxP5eNM43AsO71qfy8k6CojFKPXsIBftV5RbvUM1pfG-uKCBr2-nfyhXEgffRQAAqL8h2S550vN9u9qff2FeTJbfGacNS5w-rj32DN3aktrIi8my3M9dLLgoYlWiRSYaO3tk5LkXGToqF803PM9k7zVdoiGPmgXHLFTHnyDLsKUYVPMuk0hSD-N1OoDzD3S9UWtS2hnj_hvbT87onPFtFH-5JcnftGXJfKeuAEo8Tev71PtOZI9UaPUYkmFgYZbKLfg19dwcl14thu8Mxdtp-1n7gCLUrIXnPEb3Ms6WywW2GYEAylrjkOZI86dxX1_UmeGWyVT06II-j27A7xCT5azV-OniEU9uc8jpbLw7t1V8muiuCTKSKBu_emDVqsiOGYR-iT3tlEiySYY9OBSZ_1_yR-ssRwhETi4y4j9iaAKObUf4UKYH5KWBWKurcNCIhi-QvkWApHt_4vWl96a_S7wjSpuiUB40-WW7_PnPx37Xmcn1vzRYKEa-rbTd2Xoxws81C0NmvOOjacqE2Wc4sieyVQc_ausUnwvPOJJEXk_PX8pXYFi1y3HSeJl1xk68q7W3lxtrIDgNUIvFWmjmJ6f1bMBpokbUJppCAAMrCOeTkb28wfBJ2ehaXjw1FgrV3o9zWyfA2TWzPxZYN5qu5tafOU3XbeemXkWVrEvvvFYnZpyp5T47XbT8xP7NLdMHEHnEsJ0-Mqc3Teo=w1643-h867-no",
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: "React Summit final picure with all attendees"
	},
	{
		src:
			"https://lh3.googleusercontent.com/-bomKZrX3ssBbhEDzsDea3cwMQ2q7PByQd1E6mb_7gCITfbl3Oe19pUhCJga-Uls-dXPz5z1rpNeJNnvg--WyxXY1xrokNTn6KlFq6O-xXjRRLxIQVS6EcDElY1nKM2vTtvJzvoKD0j5G8fooEGfr80O9hHUQpT5VsPR8h0z4ZFrI3POwG8jqisDaZdY-NHJl-cbkEdIXDpORTbkTVaKqW_KfOTEyuxKASCApe2Yt_yDP8p5djzT0RiShXGv9Gq5-CMGlLuower6HaHYHAn0XvRneOk-tFco_0VuqPnPD5z41FDyJJXAJEForYNJCQvzk9HwXY9rf0-x9j8v5k5lidzk6EZbHW1ge0fwsaBYbxiL-n_sNfRYvhhZGj6KBIt1z_arL7HjDGtZWVaAyvQltH44Hjpb4XWwDmbgPr8Ogmh_SJ70IOssOS3_-kkAS6QFP0wqUGCDxXyvSdT-_hDmUn1uztZzTB8jU5vodj53Do-YXv-5J5L8jf3zQZZ6ig4I3yAbLEI23PFjtghGFYzzgFj1anU6SKaklPeNh1yEUfMsMpdj8R3pTCZM6vvAf6iScIQ5p5CTS2neDeXeS1prxs8sPAkTMzVea6o_gklRMg-nCeVex9Xe15XF55r1u5rfbFpYj306FK2oCZ8Ck2FLfwxkusGm6r0TG1l2FqYUU_6OAw4_Ue2-LsgTSNpzS8KST4sR-QFqRqotrIf-jP7dB18ulxWxZT5eb9oAAWLsnLkwLfg=w403-h268-no",
		thumbnail:
			"https://lh3.googleusercontent.com/-bomKZrX3ssBbhEDzsDea3cwMQ2q7PByQd1E6mb_7gCITfbl3Oe19pUhCJga-Uls-dXPz5z1rpNeJNnvg--WyxXY1xrokNTn6KlFq6O-xXjRRLxIQVS6EcDElY1nKM2vTtvJzvoKD0j5G8fooEGfr80O9hHUQpT5VsPR8h0z4ZFrI3POwG8jqisDaZdY-NHJl-cbkEdIXDpORTbkTVaKqW_KfOTEyuxKASCApe2Yt_yDP8p5djzT0RiShXGv9Gq5-CMGlLuower6HaHYHAn0XvRneOk-tFco_0VuqPnPD5z41FDyJJXAJEForYNJCQvzk9HwXY9rf0-x9j8v5k5lidzk6EZbHW1ge0fwsaBYbxiL-n_sNfRYvhhZGj6KBIt1z_arL7HjDGtZWVaAyvQltH44Hjpb4XWwDmbgPr8Ogmh_SJ70IOssOS3_-kkAS6QFP0wqUGCDxXyvSdT-_hDmUn1uztZzTB8jU5vodj53Do-YXv-5J5L8jf3zQZZ6ig4I3yAbLEI23PFjtghGFYzzgFj1anU6SKaklPeNh1yEUfMsMpdj8R3pTCZM6vvAf6iScIQ5p5CTS2neDeXeS1prxs8sPAkTMzVea6o_gklRMg-nCeVex9Xe15XF55r1u5rfbFpYj306FK2oCZ8Ck2FLfwxkusGm6r0TG1l2FqYUU_6OAw4_Ue2-LsgTSNpzS8KST4sR-QFqRqotrIf-jP7dB18ulxWxZT5eb9oAAWLsnLkwLfg=w403-h268-no",
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: "React Summit 2018"
	},

	{
		src:
			"https://lh3.googleusercontent.com/R5lWqWFsU_J-vISihxQ4p3iJldqJFEiTaTdHE-MNvpgw-jcevECmpLmN8bJFd71YPQ4zsgnVbMiCNyPIF1-cOJ2s13zRfJoVS2DNuV7VNglqMu1_KIOTTzqFBhxTWsgCeGAaqR4tUNzNVE-z3JmHN4DUnPM2qLaZvmGGPb1v1_3JdbWhdLi8JFY9l0N-sLiYVo-g9imGxIJb2Z3WlzpphyNY0eNZgbtPnFd7GZKaU68ghDEAYBDc0iAqYmKAxmfuxROJ7NNq5TJYreBcrc7yYq5CERYmv43ELRQ3_l54a8qIuBej9NtU3pPf-EgHj9BY0Vmt38xBsCeZMSmlr1-4SIPZTvN_okjW-anVFKhA6SrKpW0fpP6lH1pQ03EakapqrPy1KqprZKB8mowfERiE_VKyRSb5oRx7BKYwsUE4P5yqpNGXgZDXcNJxnxXwIraFy9kWbaLuBMR7w98Uu9uT-Uql9VtENPjvjsipKOzdpWhhe86eF8fMUv19O18fAiYNVU8AnLw2PLT_8nhT3yQgUwGLK9BQ_1F9Sh68-2W2SF3fWakyVQZHMqXM9V2gL0uPJ-Tc9Cs9HhIXCM7ryuTQ1sh60d_RW5FL47yffiLzyloD7GncZlUDS8g65kwfn8jzI6lwg980LLI3dyAlqu45g-x62zmbSh_kouCQVLTYQrWySDuyFTe17jIIaaFxxlBOKmrBrnOAOrALRI6B4f8bWD6dZvi-AaCYsO_hL_CkhMekd0g=w403-h268-no",
		thumbnail:
			"https://lh3.googleusercontent.com/R5lWqWFsU_J-vISihxQ4p3iJldqJFEiTaTdHE-MNvpgw-jcevECmpLmN8bJFd71YPQ4zsgnVbMiCNyPIF1-cOJ2s13zRfJoVS2DNuV7VNglqMu1_KIOTTzqFBhxTWsgCeGAaqR4tUNzNVE-z3JmHN4DUnPM2qLaZvmGGPb1v1_3JdbWhdLi8JFY9l0N-sLiYVo-g9imGxIJb2Z3WlzpphyNY0eNZgbtPnFd7GZKaU68ghDEAYBDc0iAqYmKAxmfuxROJ7NNq5TJYreBcrc7yYq5CERYmv43ELRQ3_l54a8qIuBej9NtU3pPf-EgHj9BY0Vmt38xBsCeZMSmlr1-4SIPZTvN_okjW-anVFKhA6SrKpW0fpP6lH1pQ03EakapqrPy1KqprZKB8mowfERiE_VKyRSb5oRx7BKYwsUE4P5yqpNGXgZDXcNJxnxXwIraFy9kWbaLuBMR7w98Uu9uT-Uql9VtENPjvjsipKOzdpWhhe86eF8fMUv19O18fAiYNVU8AnLw2PLT_8nhT3yQgUwGLK9BQ_1F9Sh68-2W2SF3fWakyVQZHMqXM9V2gL0uPJ-Tc9Cs9HhIXCM7ryuTQ1sh60d_RW5FL47yffiLzyloD7GncZlUDS8g65kwfn8jzI6lwg980LLI3dyAlqu45g-x62zmbSh_kouCQVLTYQrWySDuyFTe17jIIaaFxxlBOKmrBrnOAOrALRI6B4f8bWD6dZvi-AaCYsO_hL_CkhMekd0g=w403-h268-no",
		thumbnailWidth: 320,
		thumbnailHeight: 179,
		caption: "Christian Nwamba speaking at React Summit 2018"
	},
	{
		src:
			"https://lh3.googleusercontent.com/7oz8OPm_glUpyY8WDXsIHGgITdfme52C-orjH-Tyu7Wu6gGqoqFXpi-Gy8uAwVvxRgYgktCNUlLjyCmyDE78YJXCy5DbaeW-hZ0pMrGD0jx7TUwaZlR_HC0cZRCUWNOf4txLeR022yfaKBdhkHDjEHPL5Sadjm2i_XhNZEKEo-GLR7-arMd2_Pfr0xFcBEE8Oc1VjQb-fd31E8pISJgHqxX5viYtUVy7M_Y6-9VAaDAbCTpyUP7zpS-R-ss22VaXAziFORpkeILvPCSaT8ipf5IgrlhB0KwkIXAD8B3N9CxU4UrKLVlLhpAIBjc5162fnKuaSDf9MjeETfajtXzaRtL0gcYyRjOkMFyKoddzBhHXA8k7iDFsk-hk6iOKOjohMz_ZXllqp5DUGMc8kh5t39ocUHptbD5UzLILIq-xkbyAQgYVNCgmHgBKVMrq5RNafFcG1LqqfUfVy0sa7_Pg8j5pCaAFnBjbBWLV3tYmUQBKXwFTPHW97lU2aunkb6BnY1onzcuXjyCm-JiAeYn_pGZhEOVdlZkXL02fsJTc9I4ehw-7B7uSCek4Et9qegwLd54Ia4VhpT5QnkHwyWOY7frB3dpHSrnPr2GyxnIXMEa8zR_Be1v15AB5klNHWBc1QL90BXkb-EBL4x_q25OjoFC35VAQU-DKVnaAxHG9Zb6O7RsUpqTN7v71G3aib0cumPPFBnJC5i__59YdYSJZhO5N7PIONLhDBTHbp7cWamJaBDU=w1301-h867-no",
		thumbnail:
			"https://lh3.googleusercontent.com/7oz8OPm_glUpyY8WDXsIHGgITdfme52C-orjH-Tyu7Wu6gGqoqFXpi-Gy8uAwVvxRgYgktCNUlLjyCmyDE78YJXCy5DbaeW-hZ0pMrGD0jx7TUwaZlR_HC0cZRCUWNOf4txLeR022yfaKBdhkHDjEHPL5Sadjm2i_XhNZEKEo-GLR7-arMd2_Pfr0xFcBEE8Oc1VjQb-fd31E8pISJgHqxX5viYtUVy7M_Y6-9VAaDAbCTpyUP7zpS-R-ss22VaXAziFORpkeILvPCSaT8ipf5IgrlhB0KwkIXAD8B3N9CxU4UrKLVlLhpAIBjc5162fnKuaSDf9MjeETfajtXzaRtL0gcYyRjOkMFyKoddzBhHXA8k7iDFsk-hk6iOKOjohMz_ZXllqp5DUGMc8kh5t39ocUHptbD5UzLILIq-xkbyAQgYVNCgmHgBKVMrq5RNafFcG1LqqfUfVy0sa7_Pg8j5pCaAFnBjbBWLV3tYmUQBKXwFTPHW97lU2aunkb6BnY1onzcuXjyCm-JiAeYn_pGZhEOVdlZkXL02fsJTc9I4ehw-7B7uSCek4Et9qegwLd54Ia4VhpT5QnkHwyWOY7frB3dpHSrnPr2GyxnIXMEa8zR_Be1v15AB5klNHWBc1QL90BXkb-EBL4x_q25OjoFC35VAQU-DKVnaAxHG9Zb6O7RsUpqTN7v71G3aib0cumPPFBnJC5i__59YdYSJZhO5N7PIONLhDBTHbp7cWamJaBDU=w1301-h867-no",
		thumbnailWidth: 320,
		thumbnailHeight: 179,
		caption: "Robert John speaking at React Summit 2018"
	},
	{
		src:
			"https://lh3.googleusercontent.com/ra37QG76DTZgdg1kMcA6_RiERtua-6g4xpicNCXnma4s0rBlUt8Lf283gtwSxq4u6XFrqFGhGXL7xgMaF1XVYZs55qGZzKHwMIpbG5_-8Kn4aqhpggDYtTJuLhbkgUF18XnKgKWN6VKlle9djwnleJuc1JjFci6uppfr1ShD7VMnybt76S1sNfK8NxRNV7pQiwPwoHmtRaxdxvQtnmn1m6u0LnD9Ri7IrOY-GmXZA9bF78-FypI3j4s5RB3cQWgJZ82z7KDwJv5oqY_LuDAA8xafA6XYf49jxEWs7Nm7XFVFqVBT6OmRrFiI4nwrNtT2bLsRoBemoy1DX-jsRXb6BXmhWuN9vYZSI5aEdbsaIAr7uscozpggKWAwESQ5gr7DKbHVwkwFVTRG31NN2HIlaMQaS15_ga6HD1Gz70_5Z0gsKon9faXw-lGSyyyrQ2VNOWczt36YIxGSQFFeq4Ak9N95XsZMlhuY2ONIFFE-w3Vt-zu-KEUEgWIq_N9Q81F0frlgLy0VD807ScXDYmbb1Sf7ouUyYl-bJf0OZ7TyDApNEt40vtJYdexvkiIBP5JFnxKwO_ietBHlGJDMqDq5PYhiZrHvB98iauIxfROu7zdF7Q702RYLH-xYqNJw28UdkC3yTDLcaP2qXFXpHsmfAxnxnoWda8m5C_hISx1K9X8Oznzhbgn45iZ1_zSqIBcrTam24okuKoX4_uE9Y1h2BSe0ZM8rTvQfitBVT8m8P05il9I=w1461-h867-no",
		thumbnail:
			"https://lh3.googleusercontent.com/ra37QG76DTZgdg1kMcA6_RiERtua-6g4xpicNCXnma4s0rBlUt8Lf283gtwSxq4u6XFrqFGhGXL7xgMaF1XVYZs55qGZzKHwMIpbG5_-8Kn4aqhpggDYtTJuLhbkgUF18XnKgKWN6VKlle9djwnleJuc1JjFci6uppfr1ShD7VMnybt76S1sNfK8NxRNV7pQiwPwoHmtRaxdxvQtnmn1m6u0LnD9Ri7IrOY-GmXZA9bF78-FypI3j4s5RB3cQWgJZ82z7KDwJv5oqY_LuDAA8xafA6XYf49jxEWs7Nm7XFVFqVBT6OmRrFiI4nwrNtT2bLsRoBemoy1DX-jsRXb6BXmhWuN9vYZSI5aEdbsaIAr7uscozpggKWAwESQ5gr7DKbHVwkwFVTRG31NN2HIlaMQaS15_ga6HD1Gz70_5Z0gsKon9faXw-lGSyyyrQ2VNOWczt36YIxGSQFFeq4Ak9N95XsZMlhuY2ONIFFE-w3Vt-zu-KEUEgWIq_N9Q81F0frlgLy0VD807ScXDYmbb1Sf7ouUyYl-bJf0OZ7TyDApNEt40vtJYdexvkiIBP5JFnxKwO_ietBHlGJDMqDq5PYhiZrHvB98iauIxfROu7zdF7Q702RYLH-xYqNJw28UdkC3yTDLcaP2qXFXpHsmfAxnxnoWda8m5C_hISx1K9X8Oznzhbgn45iZ1_zSqIBcrTam24okuKoX4_uE9Y1h2BSe0ZM8rTvQfitBVT8m8P05il9I=w1461-h867-no",
		thumbnailWidth: 320,
		thumbnailHeight: 179,
		caption: "Developers Circles Lagos from Facebook Team"
	},
	{
		src:
			"https://lh3.googleusercontent.com/RjAdQgRj7LwrT6O8wBBCUG5mWTF2mZb2ftoTfzJUVWM0x25GGTy7LZdtq7P7m6M-IvJLXzziu4_56RcTH2-5mq7mt0mTiKQwUl5vSpSBDEJoPNdNCQRlxHM2w6fjbcOAJMAliYKa6vTjkJrEiGD-o45c9TZSzDnm8O3fLlaOi0HmqRqKPyhWv8-vxxs885mZ7E6S26nFfgT085cnvsx9kT2dBoygmQ-8EAiyy9yW0sqBDHTip1Vy3TBTMqXwA9EId3SH_CCyHiue0KLRyhPP88eL7E3dQZAsgy7v4h6AlTWXKa-CeI15osnn3nd4tnnYcBOvGJn9r6jzSio4mmXLoxfKrGFnwpqBZJ0CGQRAjelyZQsHkmyjdh1Qa1xDp-AT4QnRYoEAUGlglAV6mdQn_lv4HDvfdYbv8mfTDUpyWlUOh4ZmriHN9z8hNeLlwDXQoqEn3g_wQ6PCofO66WZPO4PLaAHJQfVzxvIi9DEO1nEng8E2roNBsbikEROudwmwjM8duBjGub_LD0Bpi8TIoyIhH5aGikNtoUZ_8SgwvmYMezGeu4r-lrl1yFQsJQpjto7zGx_6WHkocDnqJPDZ9R6O6Ty5u5ne-kUlKp6_7gsXALkUbEvdvCSnkfAk8GjcMM4NUNAbuup7dkO_2Gg5J56NznLCQXLYDPXYCpbvmOWlifUc_RRN6tmvcDXCQzphfo3phVhkT5XEtakW-2X5MslwEpIC2NVB57vHcFA88pjjOeI=w403-h268-no",
		thumbnail:
			"https://lh3.googleusercontent.com/RjAdQgRj7LwrT6O8wBBCUG5mWTF2mZb2ftoTfzJUVWM0x25GGTy7LZdtq7P7m6M-IvJLXzziu4_56RcTH2-5mq7mt0mTiKQwUl5vSpSBDEJoPNdNCQRlxHM2w6fjbcOAJMAliYKa6vTjkJrEiGD-o45c9TZSzDnm8O3fLlaOi0HmqRqKPyhWv8-vxxs885mZ7E6S26nFfgT085cnvsx9kT2dBoygmQ-8EAiyy9yW0sqBDHTip1Vy3TBTMqXwA9EId3SH_CCyHiue0KLRyhPP88eL7E3dQZAsgy7v4h6AlTWXKa-CeI15osnn3nd4tnnYcBOvGJn9r6jzSio4mmXLoxfKrGFnwpqBZJ0CGQRAjelyZQsHkmyjdh1Qa1xDp-AT4QnRYoEAUGlglAV6mdQn_lv4HDvfdYbv8mfTDUpyWlUOh4ZmriHN9z8hNeLlwDXQoqEn3g_wQ6PCofO66WZPO4PLaAHJQfVzxvIi9DEO1nEng8E2roNBsbikEROudwmwjM8duBjGub_LD0Bpi8TIoyIhH5aGikNtoUZ_8SgwvmYMezGeu4r-lrl1yFQsJQpjto7zGx_6WHkocDnqJPDZ9R6O6Ty5u5ne-kUlKp6_7gsXALkUbEvdvCSnkfAk8GjcMM4NUNAbuup7dkO_2Gg5J56NznLCQXLYDPXYCpbvmOWlifUc_RRN6tmvcDXCQzphfo3phVhkT5XEtakW-2X5MslwEpIC2NVB57vHcFA88pjjOeI=w403-h268-no",
		thumbnailWidth: 320,
		thumbnailHeight: 179,
		caption: "React Summit 2018"
	},
	{
		src:
			"https://lh3.googleusercontent.com/Spkl0cB1yf6pFAer-Dj31aLGLb8_YdHs4OtBPhwUxzyvROCUGmxxD7-L3I8iQtOXcSgzocA8bQHozX2UiL-ZmLto6iGOLtNPw1aDCVwPFYyHYNvajwQcGhze6pFAnIfX5mDBy6BxO-qDaU173vJVeagREXpK-AyuGh1zAwWtybwAE32MIKQQY43NKuLU_si_2s1F12LvbfjcOrSUjsUuyP3O3VradML9fADHT3m1T9IT27Jiq-ltGgLmhZj8vJnncZsZMWyUSWmx7x5oKJf6myKlWBZU1rPUxk1U5G45Rzq8NiQvEBy9J8JQG-EluArM5zdFdLa3wg4mEdGO5R8Al90sCCwUBjbwnHUWf1aSitFhNGQ5UNHkUwcwXBcANxO3fS3JMYymmvGzIYprVXOmx6v1hp5K5zE07I5BeKRzEyYaroZiGHHGLyfuzFlDMC87POw21EYxlcjEeNR-YArbuGeGWQtMSfbEUf7BXwhN0aSSWkmWEEQbez_ICBcaB1cEAbJRJoH1BH2BJ6lMlaNkitueZhiWE_0XefrYayzmb53YZAbGvjLT1Vz-vGu7EYf8E21QlwZWUvgmWW-jSAJRv-hNLlzZcrUjaut9jmpXEU4xOkZ6cXRuGzaDM-TNdVecPw4VSL9uYwuyAurpO1znWyNg-IOsnSAAn_nO2JfNO4zHuM76B1tktCBTemFTkxqmoCjf7__R32GEQplUJzTezwc2Li8JdZsOxgmiD1S5J3-45X8=w1301-h867-no",
		thumbnail:
			"https://lh3.googleusercontent.com/Spkl0cB1yf6pFAer-Dj31aLGLb8_YdHs4OtBPhwUxzyvROCUGmxxD7-L3I8iQtOXcSgzocA8bQHozX2UiL-ZmLto6iGOLtNPw1aDCVwPFYyHYNvajwQcGhze6pFAnIfX5mDBy6BxO-qDaU173vJVeagREXpK-AyuGh1zAwWtybwAE32MIKQQY43NKuLU_si_2s1F12LvbfjcOrSUjsUuyP3O3VradML9fADHT3m1T9IT27Jiq-ltGgLmhZj8vJnncZsZMWyUSWmx7x5oKJf6myKlWBZU1rPUxk1U5G45Rzq8NiQvEBy9J8JQG-EluArM5zdFdLa3wg4mEdGO5R8Al90sCCwUBjbwnHUWf1aSitFhNGQ5UNHkUwcwXBcANxO3fS3JMYymmvGzIYprVXOmx6v1hp5K5zE07I5BeKRzEyYaroZiGHHGLyfuzFlDMC87POw21EYxlcjEeNR-YArbuGeGWQtMSfbEUf7BXwhN0aSSWkmWEEQbez_ICBcaB1cEAbJRJoH1BH2BJ6lMlaNkitueZhiWE_0XefrYayzmb53YZAbGvjLT1Vz-vGu7EYf8E21QlwZWUvgmWW-jSAJRv-hNLlzZcrUjaut9jmpXEU4xOkZ6cXRuGzaDM-TNdVecPw4VSL9uYwuyAurpO1znWyNg-IOsnSAAn_nO2JfNO4zHuM76B1tktCBTemFTkxqmoCjf7__R32GEQplUJzTezwc2Li8JdZsOxgmiD1S5J3-45X8=w1301-h867-no",
		thumbnailWidth: 320,
		thumbnailHeight: 179,
		caption: "React Summit 2018"
	},
	{
		src:
			"https://lh3.googleusercontent.com/xqThyd1C8e0MMXGwJ2oqH9Yb0b2kP9sZyx9csmaAsjOfmMR_cCzScyE1CQr8cn7LS3X8BxftfzpVH-nE0-zOdAGQwstL9gn7KZwFF80ZnmQWk4hrzzfPpyctMzE1gajnqRJ9RLC6lNVD2qEF3kUctHCmmeu8K1n7v4-9R1eBP8OVJo93gNAkfytnphc07wLY-OjtJrXfMQUR014KMG1X_8nIItVzq95PPTmiksD5KfVwUGZlk9Uuvd-74AVKF8L5zaRrFmJANsYblBEDl3LYHDLsmGZBmj9T2Pwy7BFxjfz5lzKioAzZrlPZGw7jEenA_DWEgQlzZzt7eHLvE0hldC_7n-zaTK8KAoyLnKdroJWJQc58_kszaunKjv8t1bDjJ1V8h7kLzZXTek-ska-Ivb_4yyb6PfI4Iv1Wse4NVHiHVL00TE_kLZR4mk0wT8tB_4pMA-YeCoqTu27wXSMhhlemEOOGxwAYXyxFLVvJb1A3ME1MKs2hNpEhSpo9BlSHTlMtpqxDM7AA-Nu8Yj5wrCfFPQ9_ghaM72Sgae80hFgvsLrsjHRGDd0rOcw6FxmBrr1CrTbqKNrve3fwxVBSnC1Qv62OPqdWr18msA6knnPcQDBYbe-obiMZ0tuIOVqaKtczJKG59YJmOXkUJZOnggN49_ZRH9H5Li8UaAbBB_D6VMNZuZXo6Lqn4lbwIZ17upooPEhBxoCJhOMSN3tiGd9NFR-Q_4c_XFxSz1Nc49Sj5RQ=w426-h284-no",
		thumbnail:
			"https://lh3.googleusercontent.com/xqThyd1C8e0MMXGwJ2oqH9Yb0b2kP9sZyx9csmaAsjOfmMR_cCzScyE1CQr8cn7LS3X8BxftfzpVH-nE0-zOdAGQwstL9gn7KZwFF80ZnmQWk4hrzzfPpyctMzE1gajnqRJ9RLC6lNVD2qEF3kUctHCmmeu8K1n7v4-9R1eBP8OVJo93gNAkfytnphc07wLY-OjtJrXfMQUR014KMG1X_8nIItVzq95PPTmiksD5KfVwUGZlk9Uuvd-74AVKF8L5zaRrFmJANsYblBEDl3LYHDLsmGZBmj9T2Pwy7BFxjfz5lzKioAzZrlPZGw7jEenA_DWEgQlzZzt7eHLvE0hldC_7n-zaTK8KAoyLnKdroJWJQc58_kszaunKjv8t1bDjJ1V8h7kLzZXTek-ska-Ivb_4yyb6PfI4Iv1Wse4NVHiHVL00TE_kLZR4mk0wT8tB_4pMA-YeCoqTu27wXSMhhlemEOOGxwAYXyxFLVvJb1A3ME1MKs2hNpEhSpo9BlSHTlMtpqxDM7AA-Nu8Yj5wrCfFPQ9_ghaM72Sgae80hFgvsLrsjHRGDd0rOcw6FxmBrr1CrTbqKNrve3fwxVBSnC1Qv62OPqdWr18msA6knnPcQDBYbe-obiMZ0tuIOVqaKtczJKG59YJmOXkUJZOnggN49_ZRH9H5Li8UaAbBB_D6VMNZuZXo6Lqn4lbwIZ17upooPEhBxoCJhOMSN3tiGd9NFR-Q_4c_XFxSz1Nc49Sj5RQ=w426-h284-no",
		thumbnailWidth: 320,
		thumbnailHeight: 179,
		caption: "Miguel from Facebook at React Summit 2018"
	},
	{
		src:
			"https://lh3.googleusercontent.com/CJMbC_A-aSCi3lbjA3ohjXm2VWfCwaTYRW6Qe2hPGd-SSP12qji0D4twpA8GCQEKyBoD5AgYll1L9abdXmNN4Le8lzrhzvxaNzGZah_J41z4RC64aWsvTdJT6dEs9k9aPzSUSi_DjPs422ewq9sqJGYuLnHjAONtrLSdX4zyxfljW9Jxgw8GQr7LxDLZ2wFqDhCQNV13mr9g1HKTBl55NeAhnupj52drjWxlbpW4yyTwKcyvdPEULZ7YoLCB0sTRzbsyrJY6C0uhu6PjReg4BIMojr2aBnmpvZXNBuuHG873YtNamQmfET2CrJLYY9WQ0k4Tqd0KNbVOy1XpfuVf-bEVkFLFOR1LccXbm8BslSYtp7VtXzkwG7gvjVPGxqx9F61NW1_ZS15PG_le3ZJYA8SgEP_1f9EWxx3KTD89tiu4vUI6ibhhfD8a_BfsTVuWzf5M-ThVd6x5gt-A9nuZJxk5uOzsITSq5yTRjB2kBbs6UYQG00sjTWy04FS4ssXBsorxTrnsS76VEB2Xt2txaPAhn5QGLxBgnr16GHyBQKJRTqB2XAp36JGjFuF4cbe6bHQuzz92US3mxfUDUO7-6mGkj5elkJmMBwWcDz8d7eCE3hs82P5fmzxxlsQHvoshHIgb-6Uts_Nu2rDUK42ouZYmY9i4auHsQJlTq_o509Jk9ljuwovjC9_9vqgXY-9q03kVpJPz_vg4mVtbH5atCYYOFz8kBAJjB6q-1OB6VYzTK2o=w426-h284-no",
		thumbnail:
			"https://lh3.googleusercontent.com/CJMbC_A-aSCi3lbjA3ohjXm2VWfCwaTYRW6Qe2hPGd-SSP12qji0D4twpA8GCQEKyBoD5AgYll1L9abdXmNN4Le8lzrhzvxaNzGZah_J41z4RC64aWsvTdJT6dEs9k9aPzSUSi_DjPs422ewq9sqJGYuLnHjAONtrLSdX4zyxfljW9Jxgw8GQr7LxDLZ2wFqDhCQNV13mr9g1HKTBl55NeAhnupj52drjWxlbpW4yyTwKcyvdPEULZ7YoLCB0sTRzbsyrJY6C0uhu6PjReg4BIMojr2aBnmpvZXNBuuHG873YtNamQmfET2CrJLYY9WQ0k4Tqd0KNbVOy1XpfuVf-bEVkFLFOR1LccXbm8BslSYtp7VtXzkwG7gvjVPGxqx9F61NW1_ZS15PG_le3ZJYA8SgEP_1f9EWxx3KTD89tiu4vUI6ibhhfD8a_BfsTVuWzf5M-ThVd6x5gt-A9nuZJxk5uOzsITSq5yTRjB2kBbs6UYQG00sjTWy04FS4ssXBsorxTrnsS76VEB2Xt2txaPAhn5QGLxBgnr16GHyBQKJRTqB2XAp36JGjFuF4cbe6bHQuzz92US3mxfUDUO7-6mGkj5elkJmMBwWcDz8d7eCE3hs82P5fmzxxlsQHvoshHIgb-6Uts_Nu2rDUK42ouZYmY9i4auHsQJlTq_o509Jk9ljuwovjC9_9vqgXY-9q03kVpJPz_vg4mVtbH5atCYYOFz8kBAJjB6q-1OB6VYzTK2o=w426-h284-no",
		thumbnailWidth: 320,
		thumbnailHeight: 179,
		caption: "React Summit 2018"
	},
	{
		src:
			"https://lh3.googleusercontent.com/CZlkuHW43D998RTE4tM2unAuormiVzfnUBzYSAsAdPRMENEiLTMKnZ2zPqVyFML25xtDbSJ0Csp_ApBezHen31zkZ-Hw5N018aXTTLrhd3lKrDiI_VZytYi0yoYCnEPBw2Lhhelv3LLMpptXK4eXFvchwl4sT7ktGSPemXYItsae0G6pXxZAUZjijXPnXZwN6grqKvynQd7OB5RxcvbPZaXGGaUQUEtLnvRi9mOwUcgtfBbSVSQh7CEK3vYFCvzeo6_gzYffJEvEnItYVptbl3SJ3_IDxNwfhUoqvC6avwhHHkJCxgW86kgDxw82WbjxSzOXQr9-dx6TKvra2J2t-i5nVjItefiGK5W3IoP0LA9yN-cCzKXaOGRLWTH8c6TMgi9nTbBTNMdiE84wksSh8OXMhId872Xqd16d0J5hFuV6KfjRvgT0pRRn904qK35Qq1zXq9Km-TWEdk-iXLIPV5BFZKbUzXWwmLqm_DL5HMkiVjOoW_crbtM8NlCKGx-l5XPAE6CmGs9ZCvOatwy6DfT9HEGkI43kgR-GMWg04bSrkY1N1iVSUMOm9YPwccknNX-0Nj7xCTFsS8t82JV_2FhYEyxYxNtHEHgV4AexxEfBrHrOFPLeXGOwQibqtlq4PIIE9_dp9XVO_UHpuuUqX_WE162FYNaeFKFHUcwbcs37SMG6MdT4oO29N-Tr5gHInZgQe9ltDHWKGg6lJtrMvIZSJeBgPCk9qzcTLEZPg4t2hkA=w1301-h867-no",
		thumbnail:
			"https://lh3.googleusercontent.com/CZlkuHW43D998RTE4tM2unAuormiVzfnUBzYSAsAdPRMENEiLTMKnZ2zPqVyFML25xtDbSJ0Csp_ApBezHen31zkZ-Hw5N018aXTTLrhd3lKrDiI_VZytYi0yoYCnEPBw2Lhhelv3LLMpptXK4eXFvchwl4sT7ktGSPemXYItsae0G6pXxZAUZjijXPnXZwN6grqKvynQd7OB5RxcvbPZaXGGaUQUEtLnvRi9mOwUcgtfBbSVSQh7CEK3vYFCvzeo6_gzYffJEvEnItYVptbl3SJ3_IDxNwfhUoqvC6avwhHHkJCxgW86kgDxw82WbjxSzOXQr9-dx6TKvra2J2t-i5nVjItefiGK5W3IoP0LA9yN-cCzKXaOGRLWTH8c6TMgi9nTbBTNMdiE84wksSh8OXMhId872Xqd16d0J5hFuV6KfjRvgT0pRRn904qK35Qq1zXq9Km-TWEdk-iXLIPV5BFZKbUzXWwmLqm_DL5HMkiVjOoW_crbtM8NlCKGx-l5XPAE6CmGs9ZCvOatwy6DfT9HEGkI43kgR-GMWg04bSrkY1N1iVSUMOm9YPwccknNX-0Nj7xCTFsS8t82JV_2FhYEyxYxNtHEHgV4AexxEfBrHrOFPLeXGOwQibqtlq4PIIE9_dp9XVO_UHpuuUqX_WE162FYNaeFKFHUcwbcs37SMG6MdT4oO29N-Tr5gHInZgQe9ltDHWKGg6lJtrMvIZSJeBgPCk9qzcTLEZPg4t2hkA=w1301-h867-no",
		thumbnailWidth: 320,
		thumbnailHeight: 179,
		caption: "Kent C Dodds Speaking at React Summit 2018"
	},
	{
		src:
			"https://lh3.googleusercontent.com/vrZVRDoDk9Gcv7fae91A3JVdCcLOZWgiW9JezI2MelxZHPwzfk52Wqt1i5usLeK6ioKaGyNk8Z5XPJGsTv-tOnQhWiIVAAzxSZbg8KZBNq194Rnnmkwq1eiqoEH8rAQMYkbPQKUpjHK8ajuRHi6Hf5zkpjHV7CTcMbMWo_pn4IkAmcteoVfigMCzNFIjlQYxZlvZbg5sGXPQ3AGuqJ7nxA19Nbtxbkcpfsmwkm0UP4zGPTMwWSbsSZTIZ9KzLNZ_fW_mqgo7S683eN2v6P2nONM0PfwsYqUqUS8D4tuvpcffIwwHNNicIPWlEbx3tFNy0Ok3pNg7C8VNM1eANcbDxIpJDhuLCztY5buGlzRVusGp0_Tq6ucJNxXDH72LojBDVrWMcq0QlSzkobgvvr2OvrZyWVryQKGLCL0nxV9oJrBfmiBUZFfk41QznbuwehXzP_WRVeLEh1HbCsQNtTGj9s4ymPGYK2NlYLmk6BWcJImAg8fcGuyZ2_fLc-xOmBzjlWnd9LcvaNhaPrFg4QeHaxO4DtgOaIKBjbB8-rYCaeMCfLhohslOMEh2lXVs1wKbLvkdokQvGekIGoXqymNTy34yLuD4ifmZKY7IVeJpWIKfGnkG3PGvk_CtQlY27qtDNZ6wy_lm0EAhq83fAZcMzjys5ZcS4cVmGjwuaH3LyBORd4d_jIC1gAIga4c845IayKZyuhgMbpknMCFwJwKlqbWRJxlAgVdmEHjvgaoOMwBGwrI=w1301-h867-no",
		thumbnail:
			"https://lh3.googleusercontent.com/vrZVRDoDk9Gcv7fae91A3JVdCcLOZWgiW9JezI2MelxZHPwzfk52Wqt1i5usLeK6ioKaGyNk8Z5XPJGsTv-tOnQhWiIVAAzxSZbg8KZBNq194Rnnmkwq1eiqoEH8rAQMYkbPQKUpjHK8ajuRHi6Hf5zkpjHV7CTcMbMWo_pn4IkAmcteoVfigMCzNFIjlQYxZlvZbg5sGXPQ3AGuqJ7nxA19Nbtxbkcpfsmwkm0UP4zGPTMwWSbsSZTIZ9KzLNZ_fW_mqgo7S683eN2v6P2nONM0PfwsYqUqUS8D4tuvpcffIwwHNNicIPWlEbx3tFNy0Ok3pNg7C8VNM1eANcbDxIpJDhuLCztY5buGlzRVusGp0_Tq6ucJNxXDH72LojBDVrWMcq0QlSzkobgvvr2OvrZyWVryQKGLCL0nxV9oJrBfmiBUZFfk41QznbuwehXzP_WRVeLEh1HbCsQNtTGj9s4ymPGYK2NlYLmk6BWcJImAg8fcGuyZ2_fLc-xOmBzjlWnd9LcvaNhaPrFg4QeHaxO4DtgOaIKBjbB8-rYCaeMCfLhohslOMEh2lXVs1wKbLvkdokQvGekIGoXqymNTy34yLuD4ifmZKY7IVeJpWIKfGnkG3PGvk_CtQlY27qtDNZ6wy_lm0EAhq83fAZcMzjys5ZcS4cVmGjwuaH3LyBORd4d_jIC1gAIga4c845IayKZyuhgMbpknMCFwJwKlqbWRJxlAgVdmEHjvgaoOMwBGwrI=w1301-h867-no",
		thumbnailWidth: 320,
		thumbnailHeight: 179,
		caption: "Adewale (AceKYD) Speaking at React Summit 2018"
	},
	{
		src:
			"https://lh3.googleusercontent.com/2_UyZfWRDGbpTOJTJsnuNkr3jApTMyL0GvrSRSO4kicywmuOYoArUscTTxqBnHU39E1S08yw_Rrlj6tJumFjd52ZAgfKY8V_W5ceuOWTM-uG8Y9pPB4s409e2s3BRbGLHfhnmReTxiyhdFRPY1QRGr2jXFsmu8XfWD6CBEnw8bnLMeCVwcCeBqHzSh5eTkyhWo5UqU2cCRoXUW5Q4BnP8rlRnfMbeM3kS1o_9dN5-0OEWbRs_kxh8WCrb8RMxn33gmZDGMFwia5KcKqhK31JSSXGIaaadmmuwk2VJO2Sz4DPAWKLxX4VOVPkTjIDqAE_N5Yi3rQeXRKG9yFhxGcZwnfDAkoKPmS0AQHpVGw0fiedE8c9w3cJOVmlCVV_UTGPL7c0nHnX0y0zjpul37y4ZNoAnl1ksXjzCQJWcVPnZ8mN8g8I9UgJRBEdID_Ar-QZFnO-Zv-CuHjpesQrw9_rG3sn5bTTipwYApEl7e5rJ1f0OIq7wYDrZZnyiPNCVpncgQhmyil5BInFSDwpyjDyl59Bgql28A-LuVXQ_m9-XZ3tjWiudqvPG6YNkGt3dUJKP4jaLHvlEsBIiXWVoN9ysxpWd4oSLwttIE4E71ra41nRDYhTT6ojKKjcFjvtLyj4cOYmpY89gFII9-H9zIeu9D__hcu9hT_tCPoxv5Ia-m9AltPUct1t3FkaZw07Hx2URh9Qt2VVXFFWJZHxrgDVuYVM7pQxMKK43ee9ZI9gAe_2iEY=w1301-h867-no",
		thumbnail:
			"https://lh3.googleusercontent.com/2_UyZfWRDGbpTOJTJsnuNkr3jApTMyL0GvrSRSO4kicywmuOYoArUscTTxqBnHU39E1S08yw_Rrlj6tJumFjd52ZAgfKY8V_W5ceuOWTM-uG8Y9pPB4s409e2s3BRbGLHfhnmReTxiyhdFRPY1QRGr2jXFsmu8XfWD6CBEnw8bnLMeCVwcCeBqHzSh5eTkyhWo5UqU2cCRoXUW5Q4BnP8rlRnfMbeM3kS1o_9dN5-0OEWbRs_kxh8WCrb8RMxn33gmZDGMFwia5KcKqhK31JSSXGIaaadmmuwk2VJO2Sz4DPAWKLxX4VOVPkTjIDqAE_N5Yi3rQeXRKG9yFhxGcZwnfDAkoKPmS0AQHpVGw0fiedE8c9w3cJOVmlCVV_UTGPL7c0nHnX0y0zjpul37y4ZNoAnl1ksXjzCQJWcVPnZ8mN8g8I9UgJRBEdID_Ar-QZFnO-Zv-CuHjpesQrw9_rG3sn5bTTipwYApEl7e5rJ1f0OIq7wYDrZZnyiPNCVpncgQhmyil5BInFSDwpyjDyl59Bgql28A-LuVXQ_m9-XZ3tjWiudqvPG6YNkGt3dUJKP4jaLHvlEsBIiXWVoN9ysxpWd4oSLwttIE4E71ra41nRDYhTT6ojKKjcFjvtLyj4cOYmpY89gFII9-H9zIeu9D__hcu9hT_tCPoxv5Ia-m9AltPUct1t3FkaZw07Hx2URh9Qt2VVXFFWJZHxrgDVuYVM7pQxMKK43ee9ZI9gAe_2iEY=w1301-h867-no",
		thumbnailWidth: 320,
		thumbnailHeight: 179,
		caption: "React Summit 2018"
	},
	{
		src:
			"https://lh3.googleusercontent.com/XYrybN3hMwdscmddf4_EtU-MmmG54yD5KGdC_fwBDhqh1CaS3S-9kxbkawA9zPNl3DD_E4TQ09l9T-9kjaYVCOdLJlzIZnEWb5BG-w2X7qWEmDH7kQTlAorInsacb-LO_vJZiDNgKDkQvrPRCu9xHTDZCsAZTesgtoWHqFm2t0Elc7ffGx51Hi4Gz6jp7VPxWxZWzCKEoGsV4UpkhaNVQp2nZsFEL1FmzdAN6OnLIaapt_fKjj2cA3gdVSHm_6NkEoQqUBzRffFxchKg0MULe5WCxQx70AdO4YMLKM5OV5p-G3kqOGkCf1qj68_ypNTRa6L-7_6J9VabWauWSu6YRWkG-sFYuBJtQ8k7k-5VqrMT7a7kEEyoVpZLxU4emmTjoICxnnHHs_PA7criLR9MR7orEyzqbE6VCzrBjMuSGY0NRiNQduI2TBjbhqG8Iug5Nt3pqWH3rTqUp7rBxzOxsWOC6nBe_XvN9k5nVpQrG2GVUfIRX7Skb6PfCBJdXpfyZJVZ9-e7L7rph0i0vThZxJ_KipFWpxg-r-G1MDTdkDONi250YF17U58uKYW1p0ne0k6fawJtpDO5MK0SfdAyWrPIExyjM2mhscwUiLbY1sIykioUX4ZehsEZa8h6SnQfKIOH6eDhehovCzz_JqLF9YTKO6WC_pezKGVZ_iIjlRiJ9H7D3qrqRTury8kA654FFwIaYVmtq6lKwWh8GzsdRFVGQEbzYq7eiFRQ6zjHeMq9HqA=w1301-h867-no",
		thumbnail:
			"https://lh3.googleusercontent.com/XYrybN3hMwdscmddf4_EtU-MmmG54yD5KGdC_fwBDhqh1CaS3S-9kxbkawA9zPNl3DD_E4TQ09l9T-9kjaYVCOdLJlzIZnEWb5BG-w2X7qWEmDH7kQTlAorInsacb-LO_vJZiDNgKDkQvrPRCu9xHTDZCsAZTesgtoWHqFm2t0Elc7ffGx51Hi4Gz6jp7VPxWxZWzCKEoGsV4UpkhaNVQp2nZsFEL1FmzdAN6OnLIaapt_fKjj2cA3gdVSHm_6NkEoQqUBzRffFxchKg0MULe5WCxQx70AdO4YMLKM5OV5p-G3kqOGkCf1qj68_ypNTRa6L-7_6J9VabWauWSu6YRWkG-sFYuBJtQ8k7k-5VqrMT7a7kEEyoVpZLxU4emmTjoICxnnHHs_PA7criLR9MR7orEyzqbE6VCzrBjMuSGY0NRiNQduI2TBjbhqG8Iug5Nt3pqWH3rTqUp7rBxzOxsWOC6nBe_XvN9k5nVpQrG2GVUfIRX7Skb6PfCBJdXpfyZJVZ9-e7L7rph0i0vThZxJ_KipFWpxg-r-G1MDTdkDONi250YF17U58uKYW1p0ne0k6fawJtpDO5MK0SfdAyWrPIExyjM2mhscwUiLbY1sIykioUX4ZehsEZa8h6SnQfKIOH6eDhehovCzz_JqLF9YTKO6WC_pezKGVZ_iIjlRiJ9H7D3qrqRTury8kA654FFwIaYVmtq6lKwWh8GzsdRFVGQEbzYq7eiFRQ6zjHeMq9HqA=w1301-h867-no",
		thumbnailWidth: 320,
		thumbnailHeight: 179,
		caption: "React Summit 2018"
	},
	{
		src:
			"https://lh3.googleusercontent.com/AOOMkBxTIx4g6MPRoqxy78FAVNU-t4065MPtcSoKcm4lYkI-MTmgkHCxKU3PKoR4DjOZD1W8pOd_UNDZcNiXybclNtiTnXbcQtyjwm1qvu2wZjXD93ELAU56SCo2NA1f5EGkUu3mI0R7hyKB_0QZmbD4g9d-gZyelQjskUVbyCGEC-Zw1Jolmgfa4bqqKZua4dpF8PHHyxFW76Y1FpjjDYKhnbIfxJoA0QPklpjS7PtPb_kg92qT72wjTbdZ2HOQHXsIkTpeDIab2_7jo1tiTQrtx1AiVFdycqgSl0BnkITCJ5xlQvpl9KpbStNvtIeXzTwhou-wIC81OLg2VOKG9nl2kI3CAAj_-AJaZ9yntcb9dQH2MahjgNdo7SZU-k5efa-4jls19y8tQYthme97ot1Eq88CZ0dBcOkSF9KFR_JZUCQTcqReFPVPql5FRe9hI71pvAV3DAsQt_PPl7IcJ5COabLi_u4_KL9jp_rSR3mIXBuR4vmbJMkhkSkWQ6kF0-DIqTgvr-APiyV6VqVUzKuve4VQ1TRQ5ddc4WG30AydUnBpDBruO_gqSDUY1zy1onzk6mcRxzAnV1GOd1ahNt5BbXSb1SXVtY-9JHut_TVBw9lXUl3hK9PHqviEyeeDjdwJI446MwXkqUIEle3sG_t_LjNXsRkEBXnt5Oqi0lPgRyqubLmjiiKAQWHpTS1hVLlK-81K1XNVgYxcJvnxbDY3-1jRIhdktjreqntoan2rok0=w402-h268-no",
		thumbnail:
			"https://lh3.googleusercontent.com/AOOMkBxTIx4g6MPRoqxy78FAVNU-t4065MPtcSoKcm4lYkI-MTmgkHCxKU3PKoR4DjOZD1W8pOd_UNDZcNiXybclNtiTnXbcQtyjwm1qvu2wZjXD93ELAU56SCo2NA1f5EGkUu3mI0R7hyKB_0QZmbD4g9d-gZyelQjskUVbyCGEC-Zw1Jolmgfa4bqqKZua4dpF8PHHyxFW76Y1FpjjDYKhnbIfxJoA0QPklpjS7PtPb_kg92qT72wjTbdZ2HOQHXsIkTpeDIab2_7jo1tiTQrtx1AiVFdycqgSl0BnkITCJ5xlQvpl9KpbStNvtIeXzTwhou-wIC81OLg2VOKG9nl2kI3CAAj_-AJaZ9yntcb9dQH2MahjgNdo7SZU-k5efa-4jls19y8tQYthme97ot1Eq88CZ0dBcOkSF9KFR_JZUCQTcqReFPVPql5FRe9hI71pvAV3DAsQt_PPl7IcJ5COabLi_u4_KL9jp_rSR3mIXBuR4vmbJMkhkSkWQ6kF0-DIqTgvr-APiyV6VqVUzKuve4VQ1TRQ5ddc4WG30AydUnBpDBruO_gqSDUY1zy1onzk6mcRxzAnV1GOd1ahNt5BbXSb1SXVtY-9JHut_TVBw9lXUl3hK9PHqviEyeeDjdwJI446MwXkqUIEle3sG_t_LjNXsRkEBXnt5Oqi0lPgRyqubLmjiiKAQWHpTS1hVLlK-81K1XNVgYxcJvnxbDY3-1jRIhdktjreqntoan2rok0=w402-h268-no",
		thumbnailWidth: 320,
		thumbnailHeight: 179,
		caption: "React Summit 2018"
	}
];

const fancyBgs = ["#ffc857", "grey", "#177e89", "#ffffff"];

const pickBg = () => {
	let startIndex = 0;

	return () => {
		if (startIndex >= fancyBgs.length) startIndex = 0;

		let bgColor = fancyBgs[startIndex];

		startIndex += 1;

		return bgColor;
	};
};

const sidePanelComponents = {
	speakers: Speakers,
	schedule: Schedule,
	venue: Venue,
	sponsors: Sponsors
};

class Home extends Component {
	state = {
		bg: "#fff",
		sidePanelPos: "-70%",
		introMessageWidth: "100%",
		panelActive: false,
		activeContent: null
	};

	componentDidMount() {
		let bgColor = pickBg();
		let intervalId = setInterval(
			function() {
				this.setState({
					bg: bgColor()
				});
			}.bind(this),
			4000
		);

		this.setState({ intervalId });
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}

	showPanel = e => {
		this.setState({
			panelActive: true,
			activeContent: e.target.dataset.activePanel,
			introMessageWidth: "70%"
		});
	};

	closePanel = () => {
		this.setState({
			panelActive: false,
			introMessageWidth: "100%"
		});
	};

	showActivePanelContent() {
		const { activeContent } = this.state;

		if (activeContent) {
			const $activeComponent = sidePanelComponents[activeContent];

			return <$activeComponent />;
		}
	}

	render() {
		const { bg, panelActive, introMessageWidth } = this.state;

		return (
			<section
				className="container"
				style={{
					border: `10px solid ${bg}`
				}}>
				<BackgroundParticle backgroundColor={bg} />

				<header className="header">
					<Logo backgroundColor={bg} />
					<p>React Summit</p>
				</header>

				<main className="main">
					<section className="main__jumbotron">
						<Logo backgroundColor={bg} />

						<h1 className="main__header-title">Get Ready for React Summit 2019</h1>

						<p
							className="main__intro-message"
							style={{
								width: introMessageWidth
							}}>
							React Summit is a community driven event aimed at bringing together
							frontend developers who use React/Javascript or are hoping to learn
							more about it so as to foster deep, valuable discussions around
							what’s new, what’s possible and best practices.
						</p>
						<p>
							The conference takes place on the 30th of November, 2019 at Zone Tech Park Gbagada, Lagos, 9:00am -
							4:00pm (WAT).
						</p>

						<a
							href="https://reactsummit2019.splashthat.com"
							className="button"
							target="_blank">
							Register
						</a>
					</section>

					<section className="main__navigation">
						<nav onClick={this.showPanel}>
							<a href="#speakers" data-active-panel="speakers">
								Speakers
							</a>
							<a href="#venue" data-active-panel="venue">
								Venue
							</a>
							<a href="#sponsors" data-active-panel="sponsors">
								Sponsors
							</a>
							<a href="#schedule" data-active-panel="schedule">
								Schedule
							</a>
						</nav>
					</section>
				</main>
				<br />
				<br />
				<h4
					className="main__intro-message"
					style={{
						width: introMessageWidth
					}}>
					React Summit 2018 in pictures
					<hr />
				</h4>
				<Gallery images={IMAGES} />

				<footer className="footer">
					<p className="info">
						React Summit 2019 is powered by{" "}
						<a target="_blank" href="fb.com/groups/devclagos">
							Developer Circles Lagos
						</a>
					</p>
				</footer>

				<aside className={`side-panel ${panelActive ? "active" : ""}`}>
					<span className="side-panel__close-panel" onClick={this.closePanel}>
						&times;
					</span>

					{panelActive && this.showActivePanelContent()}
				</aside>
			</section>
		);
	}
}

export default Home;
