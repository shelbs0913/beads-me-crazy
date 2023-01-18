import React from "react";
// import { Row, Col } from 'react-bootstrap';
// import { crystalArray } from '../CrystalStore';
// import CrystalsCard from '../CrystalsCard';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './Stones.css';

export default function Stones() {
  return (
    <div>
      <h1>Top 10 Crystals!!!!</h1>

      <div className="grid-container">
        <Card sx={{ maxWidth: 375, margin: 2 }}>
          <CardMedia
            component="img"
            alt="Amethyst"
            height="340"
            image={require("../../assets/images/crystals/amethyst.jpg")}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Amethyst
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Amethyst also associated with healthy cell regeneration,
              encouraging soothing sleep and rest, and promoting hormonal
              balance.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 375, margin: 2 }}>
          <CardMedia
            component="img"
            alt="Selenite"
            height="340"
            image={require("../../assets/images/crystals/selenite.jpg")}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Selenite
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Selenite is excellent to use when meditating or trying to achieve
              mental clarity, as it is believed to compel the person holding it
              to be honest with themselves.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 375, margin: 2 }}>
          <CardMedia
            component="img"
            alt="Clear Quartz"
            height="340"
            image={require("../../assets/images/crystals/clear-quartz.jpg")}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Clear Quartz
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Clear Quartz can clear the mind, body and spirit of clutter and
              can help to align the bearer with the highest form of themselves
              so that they may reach their full potential.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 375, margin: 2 }}>
          <CardMedia
            component="img"
            alt="Green Aventurine"
            height="340"
            image={require("../../assets/images/crystals/green-aventurine.jpg")}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Green Aventurine
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Green Aventurine provides strength, confidence, courage, and
              happiness. It renews one's optimism for life and pushes us to take
              action to acquire what we want in this world. This stone urges one
              to get out of their comfort zone and take on new opportunities.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 375, margin: 2 }}>
          <CardMedia
            component="img"
            alt="Rose Quartz"
            height="340"
            image={require("../../assets/images/crystals/rose-quartz.jpg")}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rose Quartz
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rose quartz is known as the crystal of unconditional love. It's
              said to boost feelings of self-love and foster loving
              relationships with others. Smoky quartz is considered a grounding
              stone and may help you feel rooted to planet earth. It's believed
              to be mood lifting and is used for protection.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 375, margin: 2 }}>
          <CardMedia
            component="img"
            alt="Black Tourmaline"
            height="340"
            image={require("../../assets/images/crystals/black-tourmaline.jpg")}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Black Tourmaline
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Black Tourmaline helps circulation, reducing the negative imprint
              of lung problems, boosting metabolism, and effectively cutting
              down on muscle aches and pains.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 375, margin: 2 }}>
          <CardMedia
            component="img"
            alt="Smoky Quartz"
            height="340"
            image={require("../../assets/images/crystals/smoky-quartz.jpg")}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Smoky Quartz
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Smoky quartz is known to assist with improving overall wellbeing,
              the release of unwanted emotional baggage, surrendering old
              wounds, stability and grounding. It is known to connect us deeper
              with the Earth.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 375, margin: 2 }}>
          <CardMedia
            component="img"
            alt="Black Obsidian"
            height="340"
            image={require("../../assets/images/crystals/black-obsidian.jpg")}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Black Obsidian
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Black Obsidian is very good for cutting ties
              and ridding yourself of negative connections. If you’re struggling
              to leave a toxic work environment or a relationship that is no
              longer serving you, you can seek help from black obsidian stone
              with its healing properties
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 375, margin: 2 }}>
          <CardMedia
            component="img"
            alt="Blue Lace Chalcedony"
            height="340"
            image={require("../../assets/images/crystals/blue-lace-chalcedony.jpg")}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Blue Lace Chalcedony
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Blue Lace Chalcedony is representative of feelings of calmness and
              tranquillity. It’s also cool to the touch, which many believe will
              aid in helping the stone’s bearer keep a cool and calm head.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 375, margin: 2 }}>
          <CardMedia
            component="img"
            alt="Citrine"
            height="340"
            image={require("../../assets/images/crystals/citrine.jpg")}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Citrine
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Citrine is associated with positivity and optimism, which is not
              surprising given its cheerful color. It's often used to assist in
              manifesting financial abundance and opportunities. It can also be
              used to awaken the solar plexus chakra, helping to cultivate
              confidence and personal power.
            </Typography>
          </CardContent>
        </Card>
        </div>
      </div>
  );
}
