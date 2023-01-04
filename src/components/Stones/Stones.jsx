import React from 'react'
import CrystalsCard from '../CrystalsCard'
import amethyst from '../../assets/images/crystals/amethyst.jpg'
import black_obsidian from '../../assets/images/crystals/black_obsidian.jpg'
import black_tourmaline from '../../assets/images/crystals/black_tourmaline.jpg'
import blue_lace_chalcedony from '../../assets/images/crystals/blue_lace_chalcedony.jpg'
import citrine from '../../assets/images/crystals/citrine.jpg'
import clear_quartz from '../../assets/images/crystals/clear_quartz.jpg'
import green_aventurine from '../../assets/images/crystals/green_aventurine.jpg'
import rose_quartz from '../../assets/images/crystals/rose_quartz.jpg'
import selenite from '../../assets/images/crystals/selenite.jpg'
import smoky_quartz from '../../assets/images/crystals/smoky_quartz.jpg'

export default function Stones() {
  return (
    <div>
      <h1>Top 10 Stones</h1>
      <div className='grid-container'>
      <CrystalsCard imageurl={amethyst} name="Amethyst" />
      <CrystalsCard imageurl={selenite} name="Selenite" />
      <CrystalsCard imageurl={clear_quartz} name="Clear Quartz" />
      <CrystalsCard imageurl={green_aventurine} name="Green Aventurine" />
      <CrystalsCard imageurl={rose_quartz} name="Rose Quartz" />
      <CrystalsCard imageurl={black_tourmaline} name="Black Tourmaline" />
      <CrystalsCard imageurl={smoky_quartz} name="Smoky Quartz" />
      <CrystalsCard imageurl={black_obsidian} name="Black Obsidian" />
      <CrystalsCard imageurl={blue_lace_chalcedony} name="Blue Lace Chalcedony" />
      <CrystalsCard imageurl={citrine} name="Citrine" />
      </div>
    </div>
  )
}
